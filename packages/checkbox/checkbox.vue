<template>
  <div>
    <div>
      <input
        type="checkbox"
        :disabled="disabled"
        :checked="currentValue"
        @change="change"
      >
      单独选项
    </div>
  </div>
</template>
<script>
export default {
  props: {
    value: {
      type: [Boolean, Number, String],
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  methods: {
    change (e) {
      console.log(e)
    }
  }
}
</script>
