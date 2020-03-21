<template>
  <div>
    {{ this.timeData }}
  </div>
</template>
<script>
export default {
  // rafId
  // remain ?
  props: {
    time: {
      type: [Number, String],
      default: 0
    },
    millisecond: Boolean,
    format: {
      type: String,
      default: 'HH:mm:ss'
    },
    autoStart: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      remain: 0
    }
  },
  computed: {
    timeData () {
      // console.log(this.parseTimeData(this.remain))
      return this.parseTimeData(this.remain)
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  methods: {
    start () {
      if (this.counting) return

      // this.remain = +this.time

      this.counting = true
      this.endTime = Date.now() + this.remain
      this.tick()
    },
    reset () {
      this.pause()
      this.remain = +this.time

      if (this.autoStart) this.start()
    },
    pause () {
      this.counting = false
      this.cancelRaf(this.rafId)
    },
    tick () {
      if (this.millisecond) {
        this.microTick()
      } else {
        this.macroTick()
      }
    },
    microTick () {},
    macroTick () {
      this.rafId = this.raf(() => {
        if (!this.counting) return

        const remain = this.getRemain()

        if (!this.isSameSecond(remain, this.remain) || remain === 0) {
          this.setRemain(remain)
        }

        if (this.remain > 0) {
          this.macroTick()
        }
      })
    },
    getRemain () {
      return Math.max(this.endTime - Date.now(), 0)
    },
    setRemain (remain) {
      this.remain = remain
      this.$emit('change', this.timeData)

      if (remain === 0) {
        this.pause()
        this.$emit('finish')
      }
    },
    cancelRaf (id) {
      window.cancelAnimationFrame(id)
    },
    parseTimeData (time) {
      const SECOND = 1000
      const MINUTE = 60 * SECOND
      const HOUR = 60 * MINUTE
      const DAY = 24 * HOUR

      const days = Math.floor(time / DAY)
      const hours = Math.floor((time % DAY) / HOUR)
      const minutes = Math.floor((time % HOUR) / MINUTE)
      const seconds = Math.floor((time % MINUTE) / SECOND)
      const milliseconds = Math.floor(time % SECOND)

      return {
        days,
        hours,
        minutes,
        seconds: this.formatTime(seconds),
        milliseconds
      }
    },
    formatTime (n) {
      return n * 1 > 9 ? n : `0${n}`
    },
    isSameSecond (time1, time2) {
      return Math.floor(time1 / 1000) === Math.floor(time2 / 1000)
    },
    raf (FrameRequestCallback) {
      return window.requestAnimationFrame(FrameRequestCallback)
    }
  }
}
</script>
