<template>
  <div class="wrap">
    <div class="loading">
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
      <div class="loading-bar"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '正在载入...'
    }
  }
}
</script>

<style lang="scss" scoped>
// @import'../assets/stylesheets/loading.scss';

.wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%
}
</style>
