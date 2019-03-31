<template>
  <div class="bar">
    <span :class="['icon-dot','bg-'+ bgcolor]"></span>
    <slot>导航</slot>
  </div>
</template>

<script>
export default {
  methods: {},
  props: {
    bgcolor: {
      type: String,
      default: 'blue'
    }
  }
}
</script>
<style lang="scss" scoped>
.bar {
  display: flex;
  align-items: center;
  width: 100%;
  // height: .8rem;
  padding: .2rem .3rem;
  font-size: .32rem;
  border-bottom: .01rem solid rgba(0, 0, 0, 0.1);
  background: #fff;
  color: #2c3e50;
  .icon-dot {
    display: inline-block;
    // margin-left: 0.1rem;
    margin-right: 0.12rem;
    width: 0.16rem;
    height: 0.16rem;
    border-radius: 50%;
    // background: #0081ff;
  }
}
</style>
