<template>
  <div class="plugin">
    <div class="cu-card">
      <div :class="['cu-item', 'bg-img'+(index+1), 'shadow-blur']"
           v-for="(item, index) in list"
           :key="item.name"
           @click="navigateTo(item.name)">
        <div class="cardTitle">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>

const pluginList = require('static/plugin.json')
export default {
  data () {
    return {
      list: []
    }
  },
  methods: {
    navigateTo (to) {
      this.$router.push(`/${to}`)
    }
  },
  created () {
    this.list = pluginList.list
  }
}
</script>

<style lang="scss" scoped>
.cu-card {
  display: flex;
  flex-direction: column;
  .cu-item {
    border-radius: 0.1rem;
    margin: 0.3rem;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    overflow: initial;
    cursor: pointer;
  }
  @for $i from 1 through 4 {
    .bg-img#{$i} {
      background-image: url("../assets/images/img#{$i}.jpg");
    }
  }
  .cardTitle {
    position: relative;
    padding: 0.9rem 0.6rem;
    text-align: left;
    font-size: 0.4rem;
    font-weight: 300;
    color: #fff;
    transform: skew(-10deg, 0deg);
    text-shadow: 0 0 0.06rem rgba(0, 0, 0, 0.3);
  }
  .cardTitle::before {
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 0.06rem;
    border-radius: 0.2rem;
    background-color: #fff;
    display: block;
    top: 0.6rem;
    left: 0.5rem;
    transform: skew(10deg, 0deg);
  }
  .cardTitle::after {
    content: "";
    position: absolute;
    width: 1.4rem;
    border-radius: 0.06rem;
    height: 0.24rem;
    background-color: #fff;
    display: block;
    bottom: 0.76rem;
    left: 0.9rem;
    transform: skew(10deg, 0deg);
    opacity: 0.1;
  }
}
</style>
