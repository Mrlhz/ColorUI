<template>
  <div>
    <back>布局</back>
    <bar bgcolor="blue">固定尺寸</bar>
    <div class="row">
      <template v-for="n in 10">
        <div :class="['col-'+ n]" :key="n">{{`${n}0%`}}</div>
      </template>
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
.row{
  flex-direction: column;
  background: #fff;
}

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
