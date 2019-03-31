<template>
  <div class="plugin">
    <div class="cu-card">
      <div class="cu-item bg-img1 shadow-blur">
        <div class="cardTitle">索引列表</div>
      </div>
      <div class="cu-item bg-img2 shadow-blur">
        <div class="cardTitle">微动画</div>
      </div>
      <div class="cu-item bg-img3 shadow-blur">
        <div class="cardTitle">全屏抽屉</div>
      </div>
      <div class="cu-item bg-img4 shadow-blur">
        <div class="cardTitle">垂直导航</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.cu-card {
  display: flex;
  flex-direction: column;
  .cu-item {
    border-radius: 0.1rem;
    margin: 0.3rem;
    background-size: cover;
    background-position: 50%;
    background-repeat: no-repeat;
    overflow: initial;
  }
  @for $i from 1 through 4 {
    .bg-img#{$i} {
      background-image: url("../assets/images/img#{$i}.jpg");
    }
  }
  .cardTitle {
    position: relative;
    padding: 0.9rem 0.6rem;
    text-align: left;
    font-size: 0.4rem;
    font-weight: 300;
    color: #fff;
    transform: skew(-10deg, 0deg);
    text-shadow: 0 0 0.06rem rgba(0, 0, 0, 0.3);
  }
  .cardTitle::before {
    content: "";
    position: absolute;
    width: 0.6rem;
    height: 0.06rem;
    border-radius: 0.2rem;
    background-color: #fff;
    display: block;
    top: 0.6rem;
    left: 0.5rem;
    transform: skew(10deg, 0deg);
  }
  .cardTitle::after {
    content: "";
    position: absolute;
    width: 1.4rem;
    border-radius: 0.06rem;
    height: 0.24rem;
    background-color: #fff;
    display: block;
    bottom: 0.76rem;
    left: 0.9rem;
    transform: skew(10deg, 0deg);
    opacity: 0.1;
  }
}
</style>
