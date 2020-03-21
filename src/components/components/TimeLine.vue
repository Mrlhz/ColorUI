<template>
  <div>
    <back>倒计时</back>
    <count-down
      :time=time
      ref="CountDown"
    />

    <Button @click="reset">重置</Button>
    <Button @click="start">开始</Button>
    <Button @click="pause">暂停</Button>
  </div>
</template>
<script>
import CountDown from '../../basics/CountDown'
export default {
  components: {
    CountDown
  },
  data () {
    return {
      time: +new Date('2020/03/22 00:00:00') - Date.now()
    }
  },
  mounted () {
    // this.start()
  },
  methods: {
    start () {
      this.$refs.CountDown.start()
    },
    reset () {
      this.$refs.CountDown.reset()
    },
    pause () {
      this.$refs.CountDown.pause()
    }
  }
}
</script>
