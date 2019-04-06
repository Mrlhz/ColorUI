<template>
  <div>
    <back>微动画</back>
    <bar bgcolor="orange">默认效果</bar>
    <div class="row">
      <template v-for="item in list">
        <div class="col-wrap" :key="item.name">
          <div  :class="['col', 'bg-' + item.color,'shadow','shadow-'+ item.color, 'shadow-blur', isActive ? 'animation-' + item.name : '']"
                @click="toggle(item)">{{item.name}}
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import Back from '../Back'
import Bar from '../Bar'

const animationListData = require('static/animation.json')

export default {
  components: {
    Back,
    Bar
  },
  data () {
    return {
      list: [],
      isActive: false,
      current: ''
    }
  },
  methods: {
    toggle (item) {
      console.log(item);
      // this.current = item.name
      this.isActive = !this.isActive
    }
  },
  created () {
    const { list } = animationListData
    this.list = list
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.2rem;
  background: #fff;
  text-align: center;
  .col-wrap {
    flex-basis: 40%;
    width: 40%;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      height: .7rem;
      margin: 0.2rem;
      padding: 0 0.32rem;
      font-size: 0.3rem;
      font-family: Helvetica Neue,Helvetica,sans-serif;
      text-align: center;
      border-radius: 0.06rem;
    }
  }
}
</style>
