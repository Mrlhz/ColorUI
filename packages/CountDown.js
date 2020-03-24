import Slots from 'mixins/slots'

export default {
  name: 'CountDown',
  render () {
    return (
      <div>
        { /* v-slot:default || formattedTime */ }
        { this.slots('default', this.timeData) || this.formattedTime }
      </div>
    )
  },
  mixins: [Slots],
  props: {
    time: {
      type: [Number, String],
      default: 0
    },
    millisecond: Boolean,
    format: {
      type: String,
      default: '' // 'HH:mm:ss'
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
    },
    formattedTime () {
      return this.formatTime(this.format, this.timeData)
    }
  },
  watch: {
    time: {
      immediate: true,
      handler: 'reset'
    }
  },
  activated () {
    if (this.keepAlivePaused) {
      this.counting = true
      this.keepAlivePaused = false
      this.tick()
    }
  },
  deactivated () {
    if (this.counting) {
      this.pause()
      this.keepAlivePaused = true
    }
  },
  beforeDestroy () {
    this.pause()
  },
  methods: {
    start () {
      if (this.counting) return

      this.counting = true
      this.endTime = Date.now() + this.remain
      this.tick()
    },
    reset () {
      this.pause()
      this.remain = +this.time // todo

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
    microTick () {
      this.rafId = this.raf(() => {
        if (!this.counting) return

        this.setRemain(this.getRemain())

        if (this.remain > 0) {
          this.microTick()
        }
      })
    },
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
        seconds,
        milliseconds
      }
    },
    pad (n) {
      return n * 1 > 9 ? n : `0${n}`
    },
    isSameSecond (time1, time2) {
      return Math.floor(time1 / 1000) === Math.floor(time2 / 1000)
    },
    raf (FrameRequestCallback) {
      return window.requestAnimationFrame(FrameRequestCallback)
    },
    formatTime (format = 'HH:mm:ss', time) {
      const { days } = time
      let { hours, minutes, seconds, milliseconds } = time

      if (!format.includes('DD')) {
        hours += hours * days
      } else {
        format = format.replace('DD', this.pad(days))
      }

      if (!format.includes('HH')) {
        minutes += hours * 60
      } else {
        format = format.replace('HH', this.pad(hours))
      }

      if (!format.includes('mm')) {
        seconds += minutes * 60
      } else {
        format = format.replace('mm', this.pad(minutes))
      }

      if (!format.includes('ss')) {
        milliseconds += seconds * 1000
      } else {
        format = format.replace('ss', this.pad(seconds))
      }

      if (format.includes('S')) {
        const ms = milliseconds.toString().padStart(3, '0')

        if (format.includes('SSS')) {
          format = format.replace('SSS', ms)
        } else if (format.includes('SS')) {
          format = format.replace('SS', ms.slice(0, 2))
        } else {
          format = format.replace('S', ms.charAt(0))
        }
      }

      return format
    }
  }
}
