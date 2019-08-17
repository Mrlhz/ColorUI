<template>
  <div class="core-container">
    <div class="scroll-wrapper" ref="scroll">
      <div class="scroll-content">
        <div
          class="scroll-item"
          v-for="(item, index) in emojis"
          :key="index"
          @click="handleClick(item)"
        >{{item}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  components: {},
  methods: {
    init () {
      this.scroll = new BScroll(this.$refs.scroll, {
        probeType: 3,
        click: true,
        scrollY: true
      })
      console.log(this.scroll)
    },
    handleClick (item) {
      console.log(item)
    }
  },
  mounted () {
    this.init()
  },
  data () {
    return {
      emojis: [
        '😀 😁 😂 🤣 😃',
        '😄 😅 😆 😉 😊',
        '😫 😴 😌 😛 😜',
        '👆🏻 😒 😓 😔 👇🏻',
        '😑 😶 🙄 😏 😣',
        '😞 😟 😤 😢 😭',
        '🤑 😲 ☹️ 🙁 😖',
        '👍 👎 👊 ✊ 🤛',
        '☝️ ✋ 🤚 🖐 🖖',
        '👍🏼 👎🏼 👊🏼 ✊🏼 🤛🏼',
        '☝🏽 ✋🏽 🤚🏽 🖐🏽 🖖🏽',
        '🌖 🌗 🌘 🌑 🌒',
        '💫 💥 💢 💦 💧',
        '🐠 🐟 🐬 🐳 🐋',
        '😬 😐 😕 😯 😶',
        '😇 😏 😑 😓 😵',
        '🐥 🐣 🐔 🐛 🐤',
        '💪 ✨ 🔔 ✊ ✋',
        '👇 👊 👍 👈 👆',
        '💛 👐 👎 👌 💘'
      ]
    }
  }
}
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.core-container {
  .scroll-wrapper {
    height: 400px;
    overflow: hidden;
    .scroll-item {
      height: 50px;
      line-height: 50px;
      font-size: 24px;
      font-weight: bold;
      border-bottom: 1px solid #eee;
      text-align: center;
    }
    &:nth-child(2n) {
      background-color: #f3f5f7;
    }
    &:nth-child(2n + 1) {
      background-color: #42b983;
    }
  }
}
</style>
