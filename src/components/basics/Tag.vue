<template>
  <div>
    <back>标签</back>
    <bar bgcolor="blue">标签形状</bar>
    <div class="row sm">
      <template v-for="item in colorList">
        <div class="tag-wrap" :key="item.name">
          <div :class="['col', 'bg-' + item.name,'shadow','shadow-'+ item.name]">
            <div class="title">{{item.title}}</div>
          </div>
        </div>
      </template>
    </div>
    <bar bgcolor="red">标签形状</bar>
    <div class="row">
      <template v-for="item in colorList">
        <div class="tag-wrap" :key="item.name">
          <div :class="['col', 'bg-' + item.name,'shadow','shadow-'+ item.name]">
            <div class="title">{{item.title}}</div>
          </div>
        </div>
      </template>
    </div>
    <bar bgcolor="cyan" class="mt-15">ele基础标签</bar>
    <div class="el-tag-wrap">
      <div class="el-tag">标签一</div>
      <div class="el-tag el-tag--success">标签二</div>
      <div class="el-tag el-tag--info">标签三</div>
      <div class="el-tag el-tag--wraning">标签四</div>
      <div class="el-tag el-tag--danger">标签五</div>
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
  inject: ['colorLisApp'],
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
.row {
  padding: 0.3rem;
  background: #fff;
  text-align: center;
  .tag-wrap {
    flex-basis: 33.33%;
    width: 33.33%;
    padding: 0.2rem;
    .col {
      padding: 0.3rem;
      font-size: 0.32rem;
      border-radius: 0.06rem;
      .name{
        margin-top: .2rem;
        text-transform: Capitalize;
      }
    }
  }
}

.sm {
  .tag-wrap {
  flex-basis: 25%;
  width: 25%;
  padding: 0.2rem;
  .col {
    padding: 0.1rem;
    font-size: 0.32rem;
    border-radius: 0.06rem;
  }
}
}

.el-tag-wrap {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: .3rem .5rem;
  .el-tag {
    display: inline-block;
    padding: 0 .2rem;
    height: .64rem;
    line-height: .6rem;
    font-size: .24rem;
    border-radius: 4px;
    box-sizing: border-box;
    white-space: nowrap;
    border: 1px solid rgba(64,158,255,.2);
    color: #409eff;
    background-color: rgba(64,158,255,.1);
  }
  .el-tag--success {
    background-color: rgba(103,194,58,.1);
    border-color: rgba(103,194,58,.2);
    color: #67c23a;
  }
  .el-tag--info {
    background-color: hsla(220,4%,58%,.1);
    border-color: hsla(220,4%,58%,.2);
    color: #909399;
  }
  .el-tag--warning {
    background-color: rgba(230,162,60,.1);
    border-color: rgba(230,162,60,.2);
    color: #e6a23c;
  }
  .el-tag--danger {
    background-color: hsla(0,87%,69%,.1);
    border-color: hsla(0,87%,69%,.2);
    color: #f56c6c;
  }
}
</style>
