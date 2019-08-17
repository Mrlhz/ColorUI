<template>
  <div class="component">
    <img class="logo" alt="Component logo" src="../assets/images/componentBg.png">
    <home-list :list="list"></home-list>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeList from 'common/List.vue'

import { getComponentList } from 'api/index'

export default {
  name: 'componentHome',
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
      const componentLocalList = localStorage.getItem('componentList')
      if (componentLocalList) {
        const componentList = JSON.parse(componentLocalList)
        this.list = componentList
      } else {
        getComponentList().then(({ elements }) => {
          this.list = elements
          localStorage.setItem('componentList', JSON.stringify(elements))
        })
      }
    }
  },
  created () {
    this.getHomeSucc()
  }
}
</script>

<style lang="scss">
img.logo {
  display: inline-block;
  width: 100%;
  height: 4.861rem;
}
</style>
