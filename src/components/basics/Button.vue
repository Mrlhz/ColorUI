<template>
  <div>
    <back>按钮</back>
    <bar bgcolor="blue">块状按钮</bar>
    <p class="btn-block">
      <a class="btn btn-md btn-default">块状按钮</a>
      <a class="btn btn-md btn-primary">块状按钮</a>
      <a class="btn btn-md btn-success">块状按钮</a>
      <a class="btn btn-md btn-info">块状按钮</a>
      <a class="btn btn-md btn-warning">块状按钮</a>
      <a class="btn btn-md btn-danger">块状按钮</a>
    </p>
  </div>
</template>

<script>
import Back from "../Back";
import Bar from "../Bar";

const colorListData = require("../../../static/colorList.json");

export default {
  components: {
    Back,
    Bar
  },
  data() {
    return {
      colorList: []
    };
  },
  created() {
    const { colorList } = colorListData;
    this.colorList = colorList;
  }
};
</script>

<style lang="scss" scoped>
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
}
.btn-md {
  padding: 0 0.32rem;
  font-size: 0.32rem;
  height: 0.64rem;
  border-radius: 0.08rem;
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
