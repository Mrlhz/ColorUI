<template>
  <div>
    <back>按钮</back>
    <div>
      <bar bgcolor="blue">不同尺寸</bar>
      <p class="demo flex-start">
        <Button size="sm" type="default">小型按钮</Button>
        <Button size="sm" type="primary">小型按钮</Button>
        <Button size="sm" type="success">小型按钮</Button>
        <Button size="sm" type="info">小型按钮</Button>
        <Button size="sm" type="warning">小型按钮</Button>
        <Button size="sm" type="danger">小型按钮</Button>
      </p>
      <p class="demo">
        <Button size="md" type="default">默认按钮</Button>
        <Button size="md" type="primary">默认按钮</Button>
        <Button size="md" type="success">默认按钮</Button>
        <Button size="md" type="info">默认按钮</Button>
        <Button size="md" type="warning">默认按钮</Button>
        <Button size="md" type="danger">默认按钮</Button>
      </p>
      <p class="demo">
        <Button size="lg" type="default">大型按钮</Button>
        <Button size="lg" type="primary">大型按钮</Button>
        <Button size="lg" type="success">大型按钮</Button>
        <Button size="lg" type="info">大型按钮</Button>
        <Button size="lg" type="warning">大型按钮</Button>
        <Button size="lg" type="danger">大型按钮</Button>
      </p>
      <bar bgcolor="blue">块状按钮</bar>
      <p class="demo btn-block">
        <a class="block btn btn-md btn-default">块状按钮</a>
        <a class="block btn btn-md btn-primary">块状按钮</a>
        <a class="block btn btn-md btn-success">块状按钮</a>
        <a class="block btn btn-md btn-info">块状按钮</a>
        <a class="block btn btn-md btn-warning">块状按钮</a>
        <a class="block btn btn-md btn-danger">块状按钮</a>
      </p>
      <bar bgcolor="blue">图标按钮</bar>
      <p class="demo  block">
        <Button size="md" type="default" icon="close"></Button>
        <Button size="md" type="default" icon="check"></Button>
        <Button size="md" type="primary" icon="emoji"></Button>
        <Button size="md" type="success" icon="like"></Button>
        <Button size="md" type="info" icon="refresh"></Button>
        <Button size="md" type="warning" icon="favorfill"></Button>
        <Button size="md" type="danger" icon="like"></Button>
        <Button size="md" type="success" icon="game"></Button>
        <Button size="md" type="default" icon="copy"></Button>
        <Button size="md" type="info" icon="message"></Button>
        <Button size="md" type="default" icon="github"></Button>
        <Button size="md" type="primary" icon="share"></Button>
      </p>
      <bar bgcolor="blue">禁用状态</bar>
      <p class="demo ">
        <Button size="md" type="default" disabled>禁用按钮</Button>
        <Button size="md" type="primary" disabled>禁用按钮</Button>
        <Button size="md" type="success" disabled>禁用按钮</Button>
        <Button size="md" type="info" disabled>禁用按钮</Button>
        <Button size="md" type="warning" disabled>禁用按钮</Button>
        <Button size="md" type="danger" disabled>禁用按钮</Button>
      </p>
    </div>
  </div>
</template>

<script>
import Back from 'common/Back'
import Bar from 'common/Bar'
import Button from 'common/Button/button'

export default {
  components: {
    Back,
    Bar,
    Button
  },
  inject: ['colorListApp'],
  data () {
    return {
      colorList: []
    }
  },
  created () {
    this.colorList = this.colorListApp
  }
}
</script>

<style lang="scss" scoped>
p.demo {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: .3rem;
  .btn {
    margin-top: .1rem;
    margin-left: .1rem;
  }
  &.flex-start {
  justify-content: flex-start;
  }
}

.btn-block {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 0.3rem;
  .btn {
    width: 100%;
    margin-top: 0.2rem;
  }
}
</style>
