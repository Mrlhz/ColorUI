<template>
  <div>
    <back>倒计时</back>
    <h3>v-slot default time</h3>
    <count-down
      :time=time
      ref="CountDown"
      millisecond
    >
    <template v-slot:default="timeData">
      {{ timeData }}
    </template>
    </count-down>

    <h3>自定义样式</h3>
    <count-down
      :time=time
      ref="CountDown"
      millisecond
    >
      <template v-slot:default="timeData">
        <span class="item">{{ timeData.hours }}</span>
        <span class="item">{{ timeData.minutes }}</span>
        <span class="item">{{ timeData.seconds }}</span>
        <span class="item">{{ (timeData.milliseconds + '').substring(0, 2) }}</span>
      </template>
    </count-down>

    <count-down
      :time=t100
      format="SSS"
      millisecond
    >
    <template v-slot:default="timeData">
      {{ timeData }}
    </template>
    </count-down>

    <h3>format time</h3>
    <count-down
      :time=time
      format="DD天 HH:mm:ss:SS"
      millisecond
    >
    </count-down>
    <h3>自定义格式</h3>
    <count-down
      :time=time
      format="DD 天 HH 时 mm 分 ss 秒"
      millisecond
    >
    </count-down>

    <Button @click="reset">重置</Button>
    <Button @click="start">开始</Button>
    <Button @click="pause">暂停</Button>
  </div>
</template>
<script>
import CountDown from 'packages/CountDown'
export default {
  components: {
    CountDown
  },
  data () {
    return {
      time: +new Date('2020/06/26 00:00:00') - Date.now(),
      autoStart: false,
      t100: 100,
      t1000: 1000
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
    },
    slice (n) {
      return (n + '').substring(0, 2)
    }
  }
}
</script>
<style lang="scss">
.item {
  display: inline-block;
  width: 22px;
  margin-right: 5px;
  padding: 5px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #1989fa;
}
</style>
