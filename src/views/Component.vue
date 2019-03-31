<template>
  <div class="component">
    <img alt="Basics logo" src="../assets/images/componentBg.png">
    <home-list :list="list"></home-list>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeList from '@/components/List.vue'

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
img {
  display: inline-block;
  width: 100%;
}
</style>
