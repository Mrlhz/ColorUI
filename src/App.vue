<template>
  <div id="app" class="app-wrap">
    <div id="nav" class="tab-bar">
      <ul>
        <li class="tab-item">
          <router-link to="/home">基础</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/component">组件</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/plugin">扩展</router-link>
        </li>
        <li class="tab-item">
          <router-link to="/about">关于</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<style lang="scss" scope>
#nav{
  position: fixed;
  left: auto;
  right: auto;
  bottom: 0;
  width: 7.5rem;
  z-index: 999;
}
.tab-bar {
  padding: 0 0.22rem;
  margin-bottom: 0;
  height: 0.93rem;
  border-bottom: 1px solid #eee;
  background: #fff;
  font-size: 0.34rem;
  letter-spacing: 0;
  line-height: 0.48rem;
  box-sizing: border-box;
  ul {
    width: 100%;
    height: 0.93rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .tab-item {
    width: 1%;
    flex: 1 0 auto;
    text-align: center;
    color: #333;
    height: 0.93rem;
    line-height: 0.93rem;
    position: relative;
    overflow: hidden;
  }
  .tab-active:after,
  .tab-active:before {
    display: block;
    width: 0.15rem;
    height: 0.04rem;
    background: transparent;
    position: absolute;
    bottom: 0;
    content: " ";
  }
  .tab-item:before {
    right: 45%;
  }
  .tab-item:after {
    left: 45%;
  }
  .tab-active {
    color: $green-link;
  }

  .tab-active:after,
  .tab-active:before {
    background: $green-link;
  }

  .tab-active:before {
    right: 50%;
  }

  .tab-active:after {
    left: 50%;
  }
}

.auto-fixed .tab-bar {
  position: fixed;
  width: 7.5rem;
  top: 0;
  left: auto;
  right: auto;
  z-index: 1000;
}

.tab-dark .tab-bar {
  background: #ee1a1a;
  border-width: 0;
}

.tab-dark .tab-bar .tab-active,
.tab-dark .tab-bar .tab-item {
  color: #fff;
}

.tab-dark .tab-bar .tab-active:after,
.tab-dark .tab-bar .tab-active:before {
  background: #fff;
}

.wap-tabbar-wrap {
  height: 0.93rem;
}

.router-link-active {
  color: $green-link;
}
</style>
