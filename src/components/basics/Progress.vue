<template>
  <div id="Progress" class="progress-wrap">
    <back>进度条</back>
    <bar bgcolor="blue">进度条形状</bar>
    <div class="padding15 bg-white solid-bottom margin-bottom15">
      <div class="progress margin-bottom10">
        <div class="bg-red" style="width: 61.8%;">61.8%</div>
      </div>
      <div class="progress radius margin-bottom10">
        <div class="bg-red" style="width: 61.8%;">61.8%</div>
      </div>
      <div class="progress round2666 margin-bottom10">
        <div class="bg-red" style="width: 61.8%;">61.8%</div>
      </div>
    </div>
    <bar bgcolor="blue">进度条尺寸</bar>
    <div class="padding15 bg-white margin-bottom15">
      <div class="progress round2666 margin-bottom10">
        <div class="bg-red" style="width: 61.8%;"></div>
      </div>
      <div class="progress round2666 margin-bottom10 sm">
        <div class="bg-red" style="width: 61.8%;"></div>
      </div>
      <div class="progress round2666 margin-bottom10 xs">
        <div class="bg-red" style="width: 61.8%;"></div>
      </div>
    </div>
    <bar bgcolor="blue">
      进度条颜色
      <template v-slot:barright>
        <div :class="['progress-btn', className]" @click="open"></div>
      </template>
    </bar>
    <div class="padding15 bg-white solid-bottom margin-bottom15">
      <div class="progress round2666 margin-bottom10">
        <div :class="[className]" style="width: 100%;"></div>
      </div>
    </div>
    <bar bgcolor="blue">进度条条纹</bar>
    <div class="padding15 bg-white margin-bottom10">
      <div class="progress round2666 sm striped margin-bottom10">
        <div class="bg-green" style="width: 61.8%;"></div>
      </div>
      <div class="progress round2666 sm margin-top-sm striped">
        <div class="bg-black" style="width: 36%;"></div>
      </div>
    </div>
    <bar bgcolor="blue">进度条比例</bar>
    <div class="padding15 bg-white margin-bottom10">
      <div class="progress radius striped">
        <div class="bg-red" style="width: 30%;">30%</div>
        <div class="bg-olive" style="width: 45%;">45%</div>
        <div class="bg-cyan" style="width: 25%;">25%</div>
      </div>
    </div>
    <bar bgcolor="blue">进度条布局</bar>
    <div class="padding15 bg-white">
      <div class="align-items-center margin-bottom10">
        <div class="progress radius">
          <div class="bg-green" style="width: 80%;"></div>
        </div>
        <div class="icon-roundcheckfill text-green margin-left-10 font-size-14"></div>
      </div>
      <div class="align-items-center margin-top-10">
        <div class="progress round2666">
          <div class="bg-green" style="width: 80%;"></div>
        </div>
        <p class="margin-left-10 font-size-14">80%</p>
      </div>
    </div>
    <!--  -->
    <div :class="['swal-overlay', show ? 'swal-overlay--show-modal':'']">
      <div class="swal-modal">
        <div class="swal-title solid-bottom">选择颜色</div>
        <div class="row" @click="handleClick">
          <div :class="['item', 'bg-' + item.name]" v-for="item in list" :key="item.name">{{item.title}}</div>
        </div>
        <div class="swal-footer">
          <div class="swal-button-container">
            <button class="swal-button swal-button--cancel" @click="close">取消</button>
          </div>
          <div class="swal-button-container">
            <button class="swal-button swal-button--confirm" @click="close">确定</button>
          </div>
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
      list: [],
      show: false,
      className: 'bg-red',
      bodyClass: 'modal-open',
      scrollTop: 0
    }
  },
  inject: ['colorListApp'],
  methods: {
    open () {
      this.show = !this.show
      this.afterOpen()
    },
    close () {
      this.show = false
      this.beforeClose()
    },
    handleClick (e) {
      if (e.target.classList[0] === 'item') {
        this.className = e.target.classList[1]
        this.close()
      }
    },
    afterOpen () {
      this.$nextTick(() => {
        this.scrollTop = document.scrollingElement.scrollTop ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
        document.body.classList.add(this.bodyClass)
        document.body.style.top = -this.scrollTop + 'px'
      })
    },
    beforeClose () {
      this.$nextTick(() => {
        document.body.classList.remove(this.bodyClass)
        document.scrollingElement.scrollTop = document.documentElement.scrollTop = document.body.scrollTop = this.scrollTop
      })
    }
  },
  created () {
    this.list = this.colorListApp
  }
}
</script>

<style lang="scss" scoped>

.progress {
  overflow: hidden;
  display: inline-flex;
  align-items: center;
  width: 100%;
  height: 0.28rem;
  line-height: 0.28rem;
  background-color: #ebeef5;
  font-size: 0.2rem;
  div {
    display: flex;
    align-items: center;
    justify-items: flex-end;
    justify-content: space-around;
    height: 100%;
    color: #fff;
    transition: width 0.6s ease;
  }
  &.sm {
    height: 0.2rem;
  }
  &.xs {
    height: 0.1rem;
  }
}

.progress.striped div {
  background-image: linear-gradient(
    45deg,
    hsla(0, 0%, 100%, 0.15) 25%,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0) 50%,
    hsla(0, 0%, 100%, 0.15) 0,
    hsla(0, 0%, 100%, 0.15) 75%,
    rgba(0, 0, 0, 0) 0,
    rgba(0, 0, 0, 0)
  );
  background-size: 38px 38px;
}

.align-items-center {
  display: flex;
  align-items: center;
}

.progress-btn {
  width: 0.4rem;
  height: 0.4rem;
  border-radius: 0.06rem;
  // background-color: #ccc;
}

.row {
  justify-content: space-between;
  .item {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.12rem;
    height: 1.024rem;
    margin: .06rem;
    font-size: .28rem;
  }
}

.swal-modal {
  background-color: #F8F8F8;
}
</style>
