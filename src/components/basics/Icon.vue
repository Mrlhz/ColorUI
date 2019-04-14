<template>
  <div>
    <back>图标</back>
    <div class="search-bar">
      <div class="search-form">
        <span class="icon-search"></span>
        <input type="text" placeholder="搜索icon" v-model="keyword" class="search">
        <span class="icon-close" v-show="isShow" @click="handleClear"></span>
      </div>
    </div>
    <div class="icon-list-wrap">
      <div class="icon-item" v-for="item in iconList" :key="item.name">
        <div :class="['icon-'+ item.name, 'lg']"></div>
        <div class="icon-name">{{item.name}}</div>
      </div>
    </div>
    <!-- <div class="toast" v-show="toast">没有内容匹配</div> -->
  </div>
</template>

<script>
import Back from '../Back'

const iconListData = require('../../../static/iconList.json')

export default {
  components: {
    Back
  },
  data () {
    return {
      iconList: [],
      keyword: '',
      timer: null,
      toast: false
    }
  },
  computed: {
    isShow () {
      return this.keyword.length
    }
  },
  watch: {
    keyword () {
      // console.count('runs times')
      // TODO not good
      let keyword = this.keyword
      let list = iconListData.icon
      let result = []
      if (!this.keyword) this.iconList = iconListData.icon
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        for (const item of list) {
          if (item.name.indexOf(keyword) !== -1) {
            result.push(item)
          }
        }
        if (result.length > 0) {
          this.iconList = result
          this.toast = false
        } else {
          this.iconList = iconListData.icon
          this.toast = true
          this.$Alert.info({
            content: `没有${this.keyword}内容匹配`,
            duration: 1
          })
        }
      }, 100)
    }
  },
  methods: {
    handleClear () {
      this.$nextTick(() => {})
      this.keyword = ''
    }
  },
  created () {
    this.iconList = iconListData.icon
  }
}
</script>

<style lang="scss" scoped>
.lg {
  font-size: 0.4rem;
}
.search-bar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1rem;
  background-color: #fff;
  color: #666;
}

.search-form {
  display: flex;
  align-items: center;
  width: 100%;
  height: 0.64rem;
  margin: 0 0.2rem;
  border-radius: 2rem;
  background-color: #f5f5f5;
  .icon-search {
    padding: 0 0.5em 0 0.8em;
  }
  input.search {
    width: 80%;
    height: 100%;
    font-size: 0.26rem;
    background-color: #f5f5f5;
  }
  .icon-close {
    padding: 0.8em;
  }
}
.icon-list-wrap {
  display: flex;
  flex-wrap: wrap;
  font-size: 0.32rem;
  text-align: center;
  background: #fff;
  .icon-item {
    position: relative;
    width: 33.33%;
    padding: 0.2rem 0 0.3rem;
    line-height: 0.4rem;
    color: #888;
  }
  .icon-item:after {
    content: " ";
    box-sizing: border-box;
    position: absolute;
    width: 200%;
    height: 200%;
    top: 0;
    left: 0;
    border-radius: inherit;
    transform: scale(0.5);
    transform-origin: 0 0;
    pointer-events: none;
    border-right: 1px solid rgba(0, 0, 0, 0.1);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }
  .icon-name {
    margin-top: 0.2rem;
    font-size: 0.26rem;
  }
}
.toast {
  /* width: 240rpx;
  height: 70rpx;
  background: rgba(17, 17, 17, 0.7);
  color: #fff; */
  position: fixed;
  top: 180px;
  left: 50%;
  width: 7.6em;
  // width: 2.5rem;
  height: .7rem;
  line-height: .7rem;
  margin-left: -3.8em;
  text-align: center;
  border-radius: 5px;
  color: #fff;
  background: rgba(17, 17, 17, 0.7);
  z-index: 5000;
}
</style>
