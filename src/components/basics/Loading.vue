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
        <div id="windmill">
          <div id="squircle1" class="squircle"></div>
          <div id="squircle2" class="squircle">
            <br>
          </div>
          <div id="squircle4" class="squircle"></div>
          <div id="squircle3" class="squircle"></div>
        </div>
      </div>
      <!-- <div class="item">
        <div data-text="It's loading…" class="loading-text bule">It's loading…</div>
      </div> -->
      <!-- <div class="item">
        <div id="windmill2">
          <div class="cube cube1"></div>
          <div class="cube cube2"></div>
          <div class="cube cube4"></div>
          <div class="cube cube3"></div>
        </div>
      </div> -->
      <div class="item">
        <div id="windmill3">
          <div class="square square1"></div>
          <div class="square square2"></div>
          <div class="square square4"></div>
          <div class="square square3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Back from 'common/Back'
import Bar from 'common/Bar'

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
@import'../../assets/stylesheets/loading.scss';

.wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-basis: 50%;
    width: 100%;
    min-height: 1rem;
    margin: 30px 0;
  }
  .bule {
    background: #3498db;
  }
}
</style>
