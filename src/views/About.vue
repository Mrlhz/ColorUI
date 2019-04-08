<template>
  <div class="about">
    <div class="header">
      <!-- <img src="../assets/images/wave.gif" alt=""> -->
    </div>
    <div class="list-wrap text-grey">
      <div class="list-item">
        <div class="flex">
          <div class="icon-github"></div>
          <div>GitHub</div>
        </div>
        <div class="icon-right"></div>
      </div>
      <div class="list-item">
        <div class="flex">
          <div class="icon-new text-blue"></div>
          <div>关于</div>
        </div>
        <div class="icon-right"></div>
      </div>
      <div class="list-item">
        <div class="flex">
          <div class="icon-formfill text-green"></div>
          <div>日志</div>
        </div>
        <div class="icon-right"></div>
      </div>
      <div class="list-item">
        <div class="flex">
          <div class="icon-appreciatefill text-red"></div>
          <div>赞赏支持</div>
        </div>
        <div class="icon-right"></div>
      </div>
      <div class="list-item">
        <div class="flex">
          <div class="icon-writefill text-cyan"></div>
          <div>意见反馈</div>
        </div>
        <div class="icon-right"></div>
      </div>
      <div class="list-item">
        <div class="flex">
          <div class="icon-creativefill text-orange"></div>
          <div>Bug测试</div>
        </div>
        <div class="icon-right"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.about {
  .header{
    width: 100%;
    height: 5.5rem;
    background-image:url('../assets/images/gmo.jpg');
    background-repeat: no-repeat;
    background-size: 100%;
    img {

    }
  }
  .title {
    font-size: .36rem;
    font-weight: 300;
    color: #fff;
  }
}

.flex{
  display: flex;
  align-items: center;
  div {
    margin-right: .2rem;
  }
}
.list-wrap {
  display: flex;
  flex-direction: column;
  margin-top: .3rem;
  font-size: 0.32rem;
  background: #fff;
  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 .3rem;
    padding: .3rem;
    height: 1rem;
    border-bottom: 1px solid #f1f1f1;
  }
}
</style>
