<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
// import BScroll from 'better-scroll'
import BScroll from 'better-scroll'

export default {
  props: {
    probeType: {
      type: Number,
      default: 1
    },
    click: {
      type: Boolean,
      default: false
    },
    data: {
      type: Array,
      default: null
    }
  },
  mounted () {
    // this.$nextTick(() => {
    //   this.initScroll()
    // })
    setTimeout(() => {
      this.initScroll()
    }, 20)
    // this.initScroll()
  },
  methods: {
    initScroll () {
      if (!this.$refs.wrapper) return
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      })
      console.log(this.scroll)
    },
    disable () {
      this.scroll && this.scroll.disable()
    },
    enable () {
      this.scroll && this.scroll.enable()
    },
    refresh () {
      // 重新计算高度
      this.scroll && this.scroll.refresh()
    }
  },
  watch: {
    data () {
      setTimeout(() => {
        this.refresh()
      }, 20)
    }
  }
}
</script>
