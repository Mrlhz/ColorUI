<template>
  <div>
    <back>加载</back>
    <bar bgcolor="green">Loading</bar>
    <div class="wrap">
      <div class="item">
        <div class="loading">
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
          <div class="loading-bar"></div>
        </div>
      </div>
      <div class="item">
        <div class="spinner"></div>
      </div>
      <div class="item">
        <div id="loader6">
          <div id="squircle1" class="squircle"></div>
          <div id="squircle2" class="squircle">
            <br>
          </div>
          <div id="squircle4" class="squircle"></div>
          <div id="squircle3" class="squircle"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from '../Back'
import Bar from '../Bar'

export default {
  components: {
    Back,
    Bar
  },
  data () {
    return {
      colorList: []
    }
  },
  created () {}
}
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .item {
    display: flex;
    justify-content: center;
    flex-basis: 50%;
  }
}
// .loading {
//   position: absolute;
//   top: 50%;
//   left: 50%;
// }
.loading-bar {
  display: inline-block;
  width: 4px;
  height: 18px;
  margin: 0 2px;
  border-radius: 4px;
  animation: loading 1s ease-in-out infinite;
}
.loading-bar:nth-child(1) {
  background-color: #3498db;
  animation-delay: 0s;
}
.loading-bar:nth-child(2) {
  background-color: #c0392b;
  animation-delay: 0.09s;
}
.loading-bar:nth-child(3) {
  background-color: #f1c40f;
  animation-delay: 0.18s;
}
.loading-bar:nth-child(4) {
  background-color: #27ae60;
  animation-delay: 0.27s;
}

@keyframes loading {
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.2);
  }
  40% {
    transform: scale(1);
  }
}

.spinner {
  width: 60px;
  height: 60px;
  margin: 60px;
  animation: rotate 1.4s infinite ease-in-out,
    background 1.4s infinite ease-in-out alternate;
}

@keyframes rotate {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-180deg);
  }
}
@keyframes background {
  0% {
    background-color: #27ae60;
  }
  50% {
    background-color: #9b59b6;
  }
  100% {
    background-color: #c0392b;
  }
}

// ----
#loader6 {
  margin: 100px;
  width: 65px;
  line-height: 0px;
  height: 65px;
  animation-name: rotateLoader6;
  animation-duration: 3s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  transform-origin: 50% 50%;
}
.squircle {
  width: 30px;
  height: 30px;
  background: #000;
  display: inline-block;
  margin: 0;
  border: 1px #fff solid;
  vertical-align: top;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}
#squircle1 {
  animation-name: squircle;
  transform-origin: 100% 100%;
  background: #ea4335;
}
#squircle2 {
  animation-name: squircle;
  transform-origin: 0% 100%;
  background: #34a853;
}
#squircle3 {
  animation-name: squircle;
  transform-origin: 0% 0%;
  background: #fbbc05;
}
#squircle4 {
  animation-name: squircle;
  transform-origin: 100% 100%;
  background: #4285f4;
}
@keyframes rotateLoader6 {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@keyframes squircle {
  0% {
    border-radius: 0px;
  }
  50% {
    border-radius: 15px;
    margin: 5px;
    width: 19px;
    height: 19px;
  }
  100% {
    border-radius: 0px;
  }
}
// -----
</style>
