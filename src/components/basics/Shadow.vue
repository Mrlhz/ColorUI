<template>
  <div class="shadow">
    <back>边框阴影</back>
    <bar bgcolor="cyan">阴影</bar>
    <div class="row">
      <div class="item radius shadow bg-white margin-bottom15">默认阴影</div>
      <div class="item radius shadow bg-blue margin-bottom15">根据背景颜色而改变的阴影</div>
      <div class="item radius shadow shadow-lg bg-white margin-bottom15">长阴影</div>
      <div class="item radius shadow shadow-lg bg-blue margin-bottom15">长阴影</div>
      <div class="item radius shadow-warp bg-white margin-bottom15">翘边阴影</div>
      <div class="item radius shadow-blur bg-red margin-bottom15 bg-img img8">
        <div>根据背景图而改变的阴影</div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from 'common/Back'
import Bar from 'common/Bar'

export default {
  components: {
    Back,
    Bar
  },
  data () {
    return {
      list: []
    }
  },
  created () {}
}
</script>

<style lang="scss" scoped>
.shadow {
  .row {
    padding: .32rem;
    flex-direction: column;
    .item {
      // height: 1.424rem;
      // width: 7.36rem;
      padding: .52rem;
      flex: 1;
      text-align: center;
    }
  }
  // background-color: #F1F1F1;
}

.bg-img {
  background-size: cover;
  background-position: 50%;
  background-repeat: no-repeat;
}
</style>
