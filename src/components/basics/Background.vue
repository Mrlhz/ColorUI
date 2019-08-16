<template>
  <div>
    <back>
      <slot>背景</slot>
      <!-- <template v-slot:right></template> -->
    </back>
    <bar bgcolor="blue">深色背景</bar>
    <div class="row">
      <template v-for="item in colorList">
        <div class="col-wrap" :key="item.name">
          <div  :class="['col', 'bg-' + item.name,'shadow','shadow-'+ item.name, 'shadow-blur']">
            <div class="title">{{item.title}}</div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </template>
    </div>
    <bar bgcolor="cyan" class="mt-15">浅色背景</bar>
    <div class="row">
      <template v-for="item in colorList">
        <div class="col-wrap" :key="item.name">
          <div  :class="['col', 'bg-' + item.name, 'light', 'shadow','shadow-'+ item.name, 'shadow-blur']">
            <div class="title">{{item.title}}</div>
            <div class="name">{{item.name}}</div>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Back from '../Back'
import Bar from '../Bar'

export default {
  components: {
    Back,
    Bar
  },
  inject: ['colorListApp'],
  data () {
    return {
      colorList: []
    }
  },
  created () {
    this.colorList = this.colorListApp
  }
}
</script>

<style lang="scss" scoped>
.row {
  padding: 0.3rem;
  background: #fff;
  text-align: center;
  .col-wrap {
    flex-basis: 33.33%;
    width: 33.33%;
    padding: 0.2rem;
    .col {
      padding: 0.3rem;
      font-size: 0.32rem;
      border-radius: 0.06rem;
      .name{
        margin-top: .2rem;
        text-transform: Capitalize;
      }
    }
  }
}
</style>
