<template>
  <div class="back">
    <div class="left" @click="back">
      <span class="icon-back"></span>
      <slot name="left">返回主页</slot>
    </div>
    <div class="center text-align-center">
      <slot></slot>
    </div>
    <div class="right text-align-right">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
<style lang="scss" scoped>
.back {
  display: flex;
  // justify-content: space-between;
  align-items: center;
  width: 100%;
  height: .93rem;
  padding: 0 0.2rem;
  font-size: 0.28rem;
  background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
  color: #fff;
  z-index: 999;
  .icon-back {
    padding-right: 0.2rem;
  }
  div {
    flex-basis: 33.33%;
    height: .93rem;
    line-height: .93rem;
  }
  .text-align-center {
    text-align: center;
  }
}
</style>
