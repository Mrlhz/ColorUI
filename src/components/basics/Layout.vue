<template>
  <div>
    <back>布局</back>
    <bar bgcolor="blue">固定尺寸</bar>
    <div class="row">
      <template v-for="n in 10">
        <div :class="['col-'+ n]" :key="n">{{`${n}0%`}}</div>
      </template>
    </div>
    <bar bgcolor="blue" class="mt-15">比例尺寸</bar>
    <div class="row">
      <div class="flex">
        <div class="basics flex-sub">1</div>
        <div class="basics flex-sub">1</div>
      </div>
      <div class="flex">
        <div class="basics flex-sub">1</div>
        <div class="basics flex-twice">2</div>
      </div>
      <div class="flex">
        <div class="basics flex-sub">1</div>
        <div class="basics flex-twice">2</div>
        <div class="basics flex-treble">3</div>
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
  }
}
</script>

<style lang="scss" scoped>
.row {
  flex-direction: column;
  background: #fff;
}

.flex-sub {
  flex: 1;
}

.flex-twice {
  flex: 2;
}

.flex-treble {
  flex: 3;
}

.basics,
[class*="col-"] {
  margin: 0.1rem;
  padding: 0.2rem;
  border-radius: 0.06rem;
  font-size: 0.32rem;
  text-align: left;
  background-color: #8799a3;
  color: #fff;
}
</style>
