<template>
  <div class="bar">
    <div class="barleft">
      <span :class="['icon-dot','bg-'+ bgcolor]"></span>
      <slot>导航</slot>
    </div>
    <slot name="barright"></slot>
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
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: .9963rem;
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
  .barleft {
    display: flex;
    justify-content: center;
    align-items: center;
    line-height: .9963rem;
  }
}
</style>
