<template>
  <div>
    <back>模态框</back>
    <bar bgcolor="orange">普通窗口</bar>
    <div class="box">
      <div class="box">
        <button @click="open" class="swal-button preview">Preview</button>
      </div>
      <div :class="['swal-overlay', show?'swal-overlay--show-modal':'']">
        <div class="swal-modal">
          <div class="swal-title">big news</div>
          <div class="swal-text">Alert</div>
          <div class="swal-footer">
            <div class="swal-button-container">
              <button class="swal-button swal-button--cancel" @click="colse">取消</button>
            </div>
            <div class="swal-button-container">
              <button class="swal-button swal-button--confirm" @click="colse">确定</button>
            </div>
          </div>
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
      show: false
    }
  },
  methods: {
    open () {
      this.show = !this.show
    },
    colse () {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
@import "assets/stylesheets/alert.scss";

.box {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 1rem;
  background: #fff;
}

.preview {
  padding: 9px 18px;
  box-shadow: 0 2px 8px 0 rgba(0,0,0,0.07);
  border-radius: 4px;
  border: none;
  font-size: 15px;
	background: #a3dd82;
  color: #fff;
  cursor: pointer;
  // margin-top: 20px;
}
</style>
