<template>
  <div class="top" @click="backTop" v-show="isShow">
    <span class="icon-fold"></span>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clientHeight: 0,
      scrollTop: 0,
      clientRect: {}
    }
  },
  computed: {
    isShow () {
      if (this.scrollTop > this.clientHeight) {
        return true
      }
      return false
    }
  },
  methods: {
    backTop () {
      window.scrollTo(0, 0)
    },
    getClientHeight () {
      // document.body.getBoundingClientRect() === document.documentElement.getBoundingClientRect() ?
      // document.documentElement.clientHeight === 可见区域高度
      this.clientRect = document.documentElement.getBoundingClientRect()
      this.clientHeight = document.documentElement.clientHeight
      this.scrollTop = document.documentElement.scrollTop || document.body.scrollTop
    }
  },
  created () {
    document.addEventListener('scroll', this.getClientHeight)
  },
  beforeDestroy () {
    document.removeEventListener('scroll', this.getClientHeight)
  }
}
</script>

<style lang="scss" scoped>
.top-wrap {
  position: relative;
  width: 100%;
  height: 56px;
  padding: 0 .72rem;
}
.top{
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  // bottom: .93rem;
  bottom: 1rem;
  right: 16px;
  width: 56px;
  height: 56px;
  padding: 0;
  border-radius: 50%;
  background-color: #f44336;
  border-color: #f44336;
  box-shadow: 0 3px 5px -1px rgba(0,0,0,.2), 0 6px 10px 0 rgba(0,0,0,.14), 0 1px 18px 0 rgba(0,0,0,.12);
  z-index: 99;
  .icon-fold {
    font-size: 24px;
    font-weight: 500;
    color: #fff;
  }
}
</style>
