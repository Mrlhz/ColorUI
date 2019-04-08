<template>
  <div>
    <back>微动画</back>
    <bar bgcolor="orange">默认效果</bar>
    <div class="row">
      <template v-for="item in list">
        <div class="col-wrap" :key="item.name">
          <div  :class="['col', 'bg-' + item.color,'shadow','shadow-'+ item.color, 'shadow-blur', isActive === item.name ? 'animation-' + item.name : '']"
                @click="toggle(item)">{{item.name}}
          </div>
        </div>
      </template>
    </div>
    <bar bgcolor="blue">反向动画</bar>
    <div class="row">
      <template v-for="item in list">
        <div class="col-wrap" :key="item.name">
          <div  :class="['col', 'bg-' + item.color,'shadow','shadow-'+ item.color, 'shadow-blur', isActive === item.name ? 'animation-' + item.name : '', 'animation-reverse']"
                @click="toggle(item)">{{item.name}}
          </div>
        </div>
      </template>
    </div>
    <bar bgcolor="orange">延迟执行
      <template #barright>
        <div class="delay-btn bg-cyan shadow" @click="toggleDelay">开始执行</div>
      </template>
    </bar>
    <div class="row">
      <template v-for="(item, index) in list">
        <div class="col-wrap" :key="item.name">
          <div  :class="['col', 'bg-' + item.color,'shadow','shadow-'+ item.color, 'shadow-blur', delayActive?'animation-slide-bottom':'', 'delay' + (index + 1)]">
            {{delay[index]+'s'}}
          </div>
        </div>
      </template>
    </div>
    <bar bgcolor="blue">抛物线
      <template #barright>
        <div class="delay-btn sm bg-cyan shadow" @click="toggleTransform(0)">抛物线</div>
        <div class="delay-btn sm bg-cyan shadow" @click="toggleTransform(1)">水平线</div>
        <div class="delay-btn sm bg-cyan shadow" @click="toggleTransform(2)">垂直线</div>
      </template>
    </bar>
    <div class="round-wrap">
      <div :class="['round', throwActive ? 'animation-'+throwActivedType:'']"></div>
      <!-- <div :class="['round', throwActive ? 'animation-horizontal':'']"></div>
      <div :class="['round', throwActive ? 'animation-vertical':'']"></div> -->
    </div>
    <!-- <bar bgcolor="blue">水平线
      <template #barright>
        <div class="delay-btn bg-cyan shadow" @click="toggleThrow">开始执行</div>
      </template>
    </bar>
    <div class="round-wrap">
      <div :class="['round', throwActive ? 'animation-horizontal':'']"></div>
    </div>
    <bar bgcolor="blue">垂直线
      <template #barright>
        <div class="delay-btn bg-cyan shadow" @click="toggleThrow">开始执行</div>
      </template>
    </bar>
    <div class="round-wrap">
      <div :class="['round', throwActive ? 'animation-vertical':'']"></div>
    </div> -->
  </div>
</template>

<script>
import Back from '../Back'
import Bar from '../Bar'

const animationListData = require('static/animation.json')

export default {
  components: {
    Back,
    Bar
  },
  data () {
    return {
      list: [],
      isActive: '',
      delay: [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8],
      types: ['parabola', 'horizontal', 'vertical'],
      throwActivedType: '',
      delayActive: false,
      throwActive: false,
      timer: null
    }
  },
  methods: {
    toggle (item) {
      const that = this
      // this.isActive = !this.isActive
      this.isActive = item.name
      setTimeout(() => {
        that.isActive = ''
      }, 1000)
    },
    toggleDelay () {
      this.delayActive = true
      setTimeout(() => {
        this.delayActive = false
      }, 1000)
    },
    toggleThrow () {
      this.throwActive = !this.throwActive
      if (this.throwActive) {
        setTimeout(() => {
          this.throwActive = false
        }, 4000)
      }
    },
    toggleTransform (index) {
      this.throwActive = !this.throwActive
      this.throwActivedType = this.types[index]
      if (this.timer) clearTimeout(this.timer)
      this.timer = setTimeout(() => {
        this.throwActive = false
        this.throwActivedType = ''
      }, 4000)
    }
  },
  created () {
    const { list } = animationListData
    this.list = list
  }
}
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.2rem;
  background: #f1f1f1;
  text-align: center;
  .col-wrap {
    flex-basis: 40%;
    width: 40%;
    .col {
      display: flex;
      justify-content: center;
      align-items: center;
      height: .7rem;
      margin: 0.2rem;
      padding: 0 0.32rem;
      font-size: 0.3rem;
      font-family: Helvetica Neue,Helvetica,sans-serif;
      text-align: center;
      border-radius: 0.06rem;
      cursor: pointer;
    }
  }
}

.delay-btn {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  height: .63rem;
  padding: 0 .2898rem;
  font-size: .2717rem;
  font-family: Helvetica Neue,Helvetica,sans-serif;
  text-align: center;
  border-radius: 0.06rem;
  cursor: pointer;
  &.sm{
    height: .5rem;
    padding: 0 .2rem;
    font-size: .2rem;
  }
}

// .delay1 ~ .delay8
@for $i from 1 through 8{
  .delay#{$i} {
    animation-delay: #{$i/10}s ;
  }
}

// 抛物线
.round-wrap {
  display: flex;
  flex-direction: column;
  min-height: 520px;
  padding: .1rem .72rem;
  .round {
    width: .4rem;
    height: .4rem;
    background: cyan;
    border-radius: 50%;
    cursor: pointer;
  }
}

.animation-parabola {
  animation: parabola-transform-keyframes 3s linear both;
}

.animation-horizontal {
  animation: horizontal-transform-keyframes 3s linear both;
}

.animation-vertical {
  animation: vertical-transform-keyframes 3s linear both;
}

// @keyframes pao{
//   @for $i from 0 through 10 {
//     #{$i * 10%} {transform:translate3d(#{$i * 50px},#{$i * 50px},0)}
//   }
// }

$def:55.2px;
@function px2rem($px) {
  @return #{$px / $def * 1rem};
}

@keyframes pao{
  0%{transform:translate3d(0,0,0)}
  10%{transform:translate3d(px2rem(60px),px2rem(4.5px),0)}
  20%{transform:translate3d(px2rem(120px),px2rem(18px),0)}
  30%{transform:translate3d(180px,px2rem(40.5px),0)}
  40%{transform:translate3d(px2rem(240px),px2rem(72px),0)}
  50%{transform:translate3d(px2rem(300px),px2rem(112.5px),0)}
  60%{transform:translate3d(px2rem(360px),px2rem(162px),0)}
  70%{transform:translate3d(px2rem(420px),px2rem(220.5px),0)}
  80%{transform:translate3d(px2rem(480px),px2rem(288px),0)}
  90%{transform:translate3d(px2rem(540px),px2rem(364.5px),0)}
  100%{transform:translate3d(px2rem(600px),px2rem(450px),0)}
}

@keyframes parabola-transform-keyframes {
 0%{transform:translate3d(0px,0,0)}
 10%{transform:translate3d(60px,4.5px,0)}
 20%{transform:translate3d(120px,18px,0)}
 30%{transform:translate3d(180px,40.5px,0)}
 40%{transform:translate3d(240px,72px,0)}
 50%{transform:translate3d(300px,112.5px,0)}
 60%{transform:translate3d(360px,162px,0)}
 70%{transform:translate3d(420px,220.5px,0)}
 80%{transform:translate3d(480px,288px,0)}
 90%{transform:translate3d(540px,364.5,0)}
 100%{transform:translate3d(600px,450px,0)}
}

@keyframes vertical-transform-keyframes{
  @for $i from 0 through 10 {
    #{$i * 10%} {
      transform:translate3d(0, #{$i * 45px}, 0)
    }
  }
}

@keyframes horizontal-transform-keyframes {
  @for $i from 0 through 10 {
    #{$i * 10%} {transform:translate3d(#{$i * 45px}, 0, 0)}
  }
}
</style>
