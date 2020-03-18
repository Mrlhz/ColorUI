<template>
  <div class="nav-list">
    <div
      :class="['nav-li', 'bg-' + item.color]"
      v-for="item in list"
      :key="item.name"
      @click="navigateTo(item.name)"
    >
      <div class="title">{{item.title}}</div>
      <div class="name">{{item.name}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: Array
  },
  methods: {
    navigateTo (to) {
      this.$router.push(`/${to}`)
    }
  }
}
</script>

<style lang="scss">
.nav-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding: 0 0.4rem 0;
  text-align: center;
  .nav-li {
    width: 45%;
    border-radius: 0.24rem;
    padding: 0.3rem;
    margin: 0 2.5% 0.4rem;
    // background-image: url(https://image.weilanwl.com/color2.0/cardBg.png);
    background-image: url(../assets/images/cardBg.png);
    background-size: cover;
    background-position: 50%;
    position: relative;
    z-index: 1;
    .title {
      font-size: 0.32rem;
      font-weight: 300;
      span {
        position: absolute;
        right: .3rem;
        top: .3rem;
        font-size: .52rem;
        width: .6rem;
        height: .6rem;
        text-align: center;
        line-height: .6rem;
      }
    }
    .name {
      margin-top: 0.2rem;
      font-size: 0.28rem;
      text-transform: capitalize;
    }
    .name::first-letter {
      font-weight: bold;
      font-size: .36rem;
      margin-right: 1px;
    }
  }
}
</style>
