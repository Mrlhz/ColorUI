<template>
  <div class="back" @click="back">
    <span class="icon-back"></span>
    <slot>返回主页</slot>
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
  align-items: center;
  width: 100%;
  // height: .8rem;
  padding: 0.2rem;
  font-size: 0.28rem;
  background-image: linear-gradient(45deg, #0081ff, #1cbbb4);
  color: #fff;
  z-index: 999;
  .icon-back {
    padding-right: 0.2rem;
  }
}
</style>
