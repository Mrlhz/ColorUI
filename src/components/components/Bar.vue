<template>
  <div>
    <back>级联选择</back>
    <Picker :columns="columns" @change="onChange" />
    <Button @click="goToWithParam" :filter="update">跳转带参</Button>
  </div>
</template>
<script>
import Picker from 'packages/picker/index'

export default {
  components: {
    Picker
  },
  data () {
    return {
      columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],
      update (arr = []) {
        console.log(arr)
        return arr.filter((item) => {
          return item > 2
        })
      }
    }
  },
  methods: {
    onChange (picker, value, index) {
      console.log(`当前值：${value}, 当前索引：${index}`)
    },
    goToWithParam () {
      this.$router.push({ name: 'Nav', params: { id: '123456' } })
      // this.$router.push({ path: '/nav', query: { id: '2' } })
    }
  }
}
</script>
