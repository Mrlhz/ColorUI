<template>
  <div>
    <back>索引</back>
    <!-- <bar bgcolor="orange">123</bar> -->
    <div class="listview">
      <ul ref="scroll">
        <li v-for="group in list" :key="group.title" class="list-group">
          <h2 class="list-group-title">{{group.title}}</h2>
          <ul>
            <li v-for="item in group.items" :key="item.id" class="list-group-item">
              <img class="avatar" v-lazy="item.avatar" :alt="item.name" />
              <span class="name">{{item.name}}</span>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Back from 'common/Back'
// import Scroll from '@/base/Scroll'
import BScroll from 'better-scroll'

import normalizeList from 'api/indexes'
const singerList = require('static/singer.json')

export default {
  components: {
    Back
  },
  data () {
    return {
      list: [],
      groups: []
    }
  },
  methods: {
    init () {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 3,
        click: true,
        scrollY: true
      })
    }
  },
  mounted () {
    this.init()
  },
  created () {
    const { data: { list } } = singerList
    this.list = normalizeList(list)
  },
  beforeDestroy () {
    this.scroll.destroy()
  }
}
</script>

<style lang="scss" scoped>
// 颜色定义规范
$color-background: #222;
$color-background-d: rgba(0, 0, 0, 0.3);
$color-highlight-background: #333;
$color-dialog-background: #666;
$color-theme: #ffcd32;
$color-theme-d: rgba(255, 205, 49, 0.5);
$color-sub-theme: #d93f30;
$color-text: #fff;
$color-text-d: rgba(255, 255, 255, 0.3);
$color-text-l: rgba(255, 255, 255, 0.5);
$color-text-ll: rgba(255, 255, 255, 0.8);

//字体定义规范
$font-size-small-s: 10px;
$font-size-small: 12px;
$font-size-medium: 14px;
$font-size-medium-x: 16px;
$font-size-large: 18px;
$font-size-large-x: 22px;

.listview {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: $color-background;
  .list-group {
    padding-bottom: 30px;
    .list-group-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
    .list-group-item {
      display: flex;
      align-items: center;
      padding: 20px 0 0 30px;
      .avatar {
        width: 50px;
        height: 50px;
        border-radius: 50%;
      }
      .name {
        margin-left: 20px;
        color: $color-text-l;
        font-size: $font-size-medium;
      }
    }
  }
  .list-shortcut {
    position: absolute;
    z-index: 30;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 20px;
    padding: 20px 0;
    border-radius: 10px;
    text-align: center;
    background: $color-background-d;
    font-family: Helvetica;
    .item {
      padding: 3px;
      line-height: 1;
      color: $color-text-l;
      font-size: $font-size-small;
      &.current {
        color: $color-theme;
      }
    }
  }

  .list-fixed {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    .fixed-title {
      height: 30px;
      line-height: 30px;
      padding-left: 20px;
      font-size: $font-size-small;
      color: $color-text-l;
      background: $color-highlight-background;
    }
  }

  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
