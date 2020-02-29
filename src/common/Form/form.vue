<template>
  <form>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: 'iForm',
  provide () {
    return {
      form: this
    }
  },
  props: {
    model: {
      type: Object
    },
    rules: {
      type: Object
    }
  },
  data () {
    return {
      fields: [] // 用来缓存所有 FormItem 实例
    }
  },
  methods: {
    // 公开方法：全部重置数据
    resetFields () {
      this.fields.forEach(field => {
        field.resetField()
      })
    },
    validate (callback) {
      return new Promise((resolve) => {
        let valid = true
        let count = 0

        this.fields.forEach((field) => {
          field.validate('', (errors) => {
            if (errors) valid = false
            if (++count === this.fields.length) {
              resolve(valid)
              typeof callback === 'function' && callback(valid)
            }
          })
        })
      })
    }
  },
  created () {
    this.$on('on-form-item-add', (field) => {
      if (field) this.fields.push(field)
    })

    this.$on('on-form-item-remove', (field) => {
      if (field.prop) this.fields.splice(this.fields.indexOf(field), 1)
    })
  }
}
</script>
