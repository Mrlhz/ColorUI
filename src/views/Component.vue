<template>
  <div class="component">
    <img class="logo" alt="Component logo" src="../assets/images/componentBg.png">
    <home-list :list="list"></home-list>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeList from 'packages/List.vue'

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
    async getHomeSucc () {
      const _componentLocalList = localStorage.getItem('componentList')
      const componentLocalList = await Promise.try(() => JSON.parse(_componentLocalList)).catch(() => [])
      if (Array.isArray(componentLocalList) && componentLocalList.length) {
        const componentList = componentLocalList
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
.component {
  position: relative;
  // height: 100vh;
  img.logo {
  display: inline-block;
  width: 100%;
  height: 4.861rem;
  }
}
</style>
