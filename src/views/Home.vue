<template>
  <div class="home">
    <img alt="Basics logo" src="../assets/images/BasicsBg.png">
    <home-list :list="list"></home-list>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeList from 'common/List.vue'

const elements = require('../../static/elements.json')

export default {
  name: 'home',
  data () {
    return {
      list: []
    }
  },
  components: {
    HomeList
  },
  methods: {
    getHomeSucc () {
      const { elements: list } = elements
      this.list = list
    }
  },
  created () {
    this.getHomeSucc()
  }
}
</script>

<style lang="scss">
img {
  display: inline-block;
  width: 100%;
  height: 4.861rem;
}
</style>
