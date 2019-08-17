<template>
  <div>
    <back>按钮</back>
    <div>
      <bar bgcolor="blue">不同尺寸</bar>
      <p class="demo flex-start">
        <a class="btn btn-sm btn-default">小型按钮</a>
        <a class="btn btn-sm btn-primary">小型按钮</a>
        <a class="btn btn-sm btn-success">小型按钮</a>
        <a class="btn btn-sm btn-info">小型按钮</a>
        <a class="btn btn-sm btn-warning">小型按钮</a>
        <a class="btn btn-sm btn-danger">小型按钮</a>
      </p>
      <p class="demo">
        <a class="btn btn-md btn-default">默认按钮</a>
        <a class="btn btn-md btn-primary">默认按钮</a>
        <a class="btn btn-md btn-success">默认按钮</a>
        <a class="btn btn-md btn-info">默认按钮</a>
        <a class="btn btn-md btn-warning">默认按钮</a>
        <a class="btn btn-md btn-danger">默认按钮</a>
      </p>
      <p class="demo">
        <a class="btn btn-lg btn-default">大型按钮</a>
        <a class="btn btn-lg btn-primary">大型按钮</a>
        <a class="btn btn-lg btn-success">大型按钮</a>
        <a class="btn btn-lg btn-info">大型按钮</a>
        <a class="btn btn-lg btn-warning">大型按钮</a>
        <a class="btn btn-lg btn-danger">大型按钮</a>
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
        <a class="btn btn-md btn-default">
          <span class="icon-close"></span>
        </a>
        <a class="btn btn-md btn-default">
          <span class="icon-check"></span>
        </a>
        <a class="btn btn-md btn-primary">
          <span class="icon-emoji"></span>
        </a>
        <a class="btn btn-md btn-success">
          <span class="icon-like"></span>
        </a>
        <a class="btn btn-md btn-info">
          <span class="icon-refresh"></span>
        </a>
        <a class="btn btn-md btn-warning">
          <span class="icon-favorfill"></span>
        </a>
        <a class="btn btn-md btn-danger">
          <span class="icon-like"></span>
        </a>
        <a class="btn btn-md btn-success">
          <span class="icon-game"></span>
        </a>
        <a class="btn btn-md btn-default">
          <span class="icon-copy"></span>
        </a>
        <a class="btn btn-md btn-info">
          <span class="icon-message"></span>
        </a>
        <a class="btn btn-md btn-default">
          <span class="icon-github"></span>
        </a>
        <a class="btn btn-md btn-primary">
          <span class="icon-share"></span>
        </a>
      </p>
      <bar bgcolor="blue">禁用状态</bar>
      <p class="demo ">
        <a class="btn btn-md btn-default disabled">禁用按钮</a>
        <a class="btn btn-md btn-primary disabled">禁用按钮</a>
        <a class="btn btn-md btn-success disabled">禁用按钮</a>
        <a class="btn btn-md btn-info disabled">禁用按钮</a>
        <a class="btn btn-md btn-warning disabled">禁用按钮</a>
        <a class="btn btn-md btn-danger disabled">禁用按钮</a>
      </p>
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
.btn {
  position: relative;
  box-sizing: border-box;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  line-height: 1;
  color: #fff;
  text-align: center;
  border: none;
  outline: none;
  user-select: none;
  &.disabled {
    cursor: not-allowed;
    opacity: .65;
  }
}

.btn-sm {
  padding: 0 .2rem;
  font-size: .24rem;
  height: .48rem;
  border-radius: .06rem;
}

.btn-md {
  padding: 0 .32rem;
  font-size: .32rem;
  height: .64rem;
  border-radius: .08rem;
}

.btn-lg {
  padding: 0 .4rem;
  font-size: .36rem;
  height: .8rem;
  border-radius: .12rem;
}

.btn-default {
  color: #606266;
  background-color: #fff;
  border: 1px solid #dcdfe6;
}
.btn-primary {
  color: #fff;
  background-color: #409eff;
}
.btn-success {
  color: #fff;
  background-color: #67c23a;
}

.btn-info {
  color: #fff;
  background-color: #909399;
}

.btn-warning {
  color: #fff;
  background-color: #e6a23c;
}

.btn-danger {
  color: #fff;
  background-color: #f56c6c;
}
</style>
