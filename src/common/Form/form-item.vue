<template>
  <div class="form-item">
    <label
      v-if="label"
      :class="['form-item-label', isRequired ? 'i-form-item-label-required': '']"
    >
      {{ label }}
    </label>
    <div class="form-item-content">
      <slot></slot>
      <div
        v-if="validateState === 'error'"
        class="i-form-item-message">
        {{ validateMessage }}
      </div>
    </div>
  </div>
</template>
<script>

import AsyncValidator from 'async-validator'
import Emitter from '../../mixins/emitter'

export default {
  name: 'iFormItem',
  inject: ['form'],
  mixins: [Emitter],
  props: {
    label: {
      type: String,
      default: ''
    },
    prop: {
      type: String
    }
  },
  data () {
    return {
      isRequired: false, // 是否为必填
      validateState: '', // 校验状态
      validateMessage: '' // 校验不通过时的提示信息
    }
  },
  computed: {
    fieldValue () {
      return this.form.model[this.prop]
    }
  },
  methods: {
    onFieldBlur () {
      this.validate('blur')
    },
    onFieldChange () {
      this.validate('change')
    },
    resetField () {
      this.validateState = ''
      this.validateMessage = ''

      this.form.model[this.prop] = this.initialValue
    },
    getRules () {
      let formRules = this.form.rules

      formRules = formRules ? formRules[this.prop] : []

      return [].concat(formRules || [])
    },
    setRules () {
      const rules = this.getRules()
      if (rules.length) {
        // forEach can do
        rules.every((rule) => {
          this.isRequired = rule.required
        })
      }
      this.$on('on-form-blur', this.onFieldBlur)
      this.$on('on-form-change', this.onFieldChange)
    },
    getFilteredRule (trigger) {
      const rules = this.getRules()
      return rules.filter((rule) => !rule.trigger || rule.trigger.indexOf(trigger) !== -1)
    },
    validate (trigger, callback) {
      const rules = this.getFilteredRule(trigger)

      if (!rules || rules.length === 0) return true

      // 设置状态为校验中
      this.validateState = 'validating'

      const descriptor = {
        [this.prop]: rules
      }

      const validator = new AsyncValidator(descriptor)
      const model = {
        [this.prop]: this.fieldValue
      }

      validator.validate(model, { firstFields: true }, (errors) => {
        this.validateState = !errors ? 'success' : 'error'
        this.validateMessage = errors ? errors[0].message : ''

        typeof callback === 'function' && callback(this.validateMessage)
      })
    }
  },
  mounted () {
    if (this.prop) {
      this.dispatch('iForm', 'on-form-item-add', this)

      // 设置初始值，以便在重置时恢复默认值
      this.initialValue = this.fieldValue
      this.setRules()
    }
  },
  beforeDestroy () {
    this.dispatch('iForm', 'on-form-item-remove', this)
  }
}
</script>
<style>
  .i-form-item-label-required:before {
    content: '*';
    color: red;
  }
  .i-form-item-message {
    color: red;
  }
</style>
