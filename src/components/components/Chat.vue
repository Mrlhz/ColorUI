<template>
  <div>
    <back>聊天</back>
    <bar bgcolor="orange">测试</bar>
    <div class="box">
      <Button type="primary" size="md" @click="create">提交</Button>
    </div>
    <div class="box">
      <Button type="primary" size="md" @click="list">图书</Button>
    </div>
  </div>
</template>

<script>
import request from '../../util/request'

export default {
  components: {},
  data () {
    return {
      show: false
    }
  },
  methods: {
    create () {
      request.post('v1/register', {
        nickname: 'lhzs',
        email: '2@qq.com',
        password: '123456@',
        password2: '123456@',
        openid: ''
      }).then((data) => {
        console.log(data, 6)
      }).catch((e) => {
        if (e.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          // console.log(e.response.data)
          // console.log(e.response.status)
          // console.log(e.response.headers)
          console.log(e.response.data)
        } else if (e.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log(e.request)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', e.message)
        }
      })
    },
    list () {
      request.get('v1/books?start=0').then((data) => {
        console.log(data)
      }).catch((e) => {
        if (e.response.data) {
          console.error(e.response.data)
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1rem;
  background: #fff;
}
</style>
