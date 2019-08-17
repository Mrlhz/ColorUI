<template>
  <div class="avatar-wrap">
    <back>头像</back>
    <bar bgcolor="blue">头像形状</bar>
    <div class="row mt-15">
      <div class="avatar round img1"></div>
      <div class="avatar img2"></div>
    </div>
    <bar bgcolor="blue" class="mt-15">头像尺寸</bar>
    <div class="row mt-15">
      <div class="avatar sm round img1"></div>
      <div class="avatar round img2"></div>
      <div class="avatar lg round img3"></div>
      <div class="avatar xl round img4"></div>
    </div>
    <div class="row">
      <div class="avatar sm round bg-olive">A</div>
      <div class="avatar round bg-olive">B</div>
      <div class="avatar lg round bg-olive">C</div>
      <div class="avatar xl round bg-olive">D</div>
    </div>
    <div class="row">
      <div class="avatar sm round bg-red">A</div>
      <div class="avatar round bg-red">B</div>
      <div class="avatar lg round bg-red">C</div>
      <div class="avatar xl round bg-red">D</div>
    </div>
    <bar bgcolor="blue" class="mt-15">内嵌文字(图标)</bar>
    <div class="row mt-15">
      <div class="avatar round bg-gray">
        <div class="icon-people lg"></div>
      </div>
      <div class="avatar bg-gray">译</div>
    </div>
    <bar bgcolor="blue" class="mt-15">头像颜色</bar>
    <div class="row">
      <div :class="['avatar', 'lg', 'round', 'avatar-text', 'bg-' + c.name]" v-for="c in list" :key="c.name">
        {{c.name}}
      </div>
    </div>
    <bar bgcolor="blue" class="mt-15">头像组</bar>
    <div class="row">
      <div class="avatar-group">
        <div :class="['avatar', 'lg', 'round', 'img' + index]" v-for="index in 6" :key="index">
        </div>
      </div>
    </div>
    <bar bgcolor="blue">头像标签</bar>
    <div class="row">
      <div :class="['avatar', 'lg', 'round', 'img' + index]" v-for="index in 4" :key="index">
        <div class="tag round" :class="[index%2 === 0 ? 'icon-female bg-pink':'icon-male bg-blue']"></div>
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
      list: []
    }
  },
  inject: ['colorListApp'],
  created () {
    this.list = this.colorListApp
  }
}
</script>

<style lang="scss" scoped>
.avatar-wrap {
  background: #f1f1f1;
}
.row {
  display: flex;
  align-items: center;
  padding: 0.32rem;
  .avatar:nth-of-type(n + 1) {
    margin: 0.12rem;
  }
  .avatar.avatar-text {
    // text-transform: capitalize;
    font-variant: small-caps;
    font-size: 0.24rem;
    &.bg-white {
      color: #666;
    }
  }
}

.avatar-group {
  direction: rtl;
  unicode-bidi: bidi-override;
  padding: 0 0.1rem 0 0.4rem;
  display: inline-block;
}

.row .avatar-group .avatar {
  margin-left: -0.44rem;
  border: 0.04rem solid #f1f1f1;
  vertical-align: middle;
}

.avatar-group .avatar.sm {
  margin-left: -0.2rem;
  border: 0.01rem solid #f1f1f1;
}

.avatar {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: 0.68rem;
  height: 0.68rem;
  font-size: 0.42rem; // 21px
  // background-color: #ccc;
  background-size: cover;
  background-position: center;
  color: #fff;
  white-space: nowrap;
  border-radius: 0.06rem;
  &.sm {
    width: 0.48rem;
    height: 0.48rem;
    font-size: 0.28rem; // 14 * 1
  }
  &.lg {
    width: 0.96rem;
    height: 0.96rem;
    font-size: 0.56rem;
  }
  &.xl {
    width: 1.36rem;
    height: 1.36rem;
    font-size: 0.68rem;
  }
}
// .img1 {
//   background-image: url(../../assets/images/platelet01.jpg);
// }
// .img2 {
//     background-image: url(../../assets/images/platelet11.jpg);
// }
// .img3 {
//   background-image: url(../../assets/images/platelet21.jpg);
// }

.tag,
.badge {
  box-sizing: border-box;
  position: absolute;
  top: -0.04rem;
  right: -0.04rem;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.16rem;
  height: 0.48rem;
  width: 0.34rem;
  height: 0.34rem;
  font-size: 0.24rem;
  // font-family: Helvetica Neue, Helvetica, sans-serif;
  white-space: nowrap;
  // background-color: #fff;
}
</style>
