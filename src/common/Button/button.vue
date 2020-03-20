<template>
  <button :class="classes" :disabled="disabled" @click="handleClick">
    <span :class="icons" v-if="icon"></span>
    <slot></slot>
  </button>
</template>
<script>
import { oneOf } from '../../util/assist'
const prefixCls = 'btn'

export default {
  props: {
    type: {
      validator (value) {
        return oneOf(value, ['default', 'primary', 'success', 'info', 'warning', 'danger', 'dashed', 'text', 'error'])
      },
      default: 'default'
    },
    size: {
      validator (value) {
        // ['small', 'large', 'middle', 'default']
        return oneOf(value, ['sm', 'lg', 'md', 'default'])
      },
      default: 'sm'
    },
    icon: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    classes () {
      return [
        prefixCls,
        `${prefixCls}-${this.type}`,
        {
          [`${prefixCls}-${this.size}`]: this.size !== 'default'
        },
        this.disabled ? 'disabled' : ''
      ]
    },
    icons () {
      return 'icon-' + this.icon
    }
  },
  methods: {
    handleClick () {
      this.$emit('click', event)
    }
  }
}
</script>
