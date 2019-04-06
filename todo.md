# Vue学习之旅

## 参考 
- [ColorUI](https://github.com/weilanwl/ColorUI)
- [colorful-ui](https://github.com/Keyves/colorful-ui) https://keyves.github.io/colorful-ui/#/button
- [从零实现Vue的组件库（零）- 基本结构以及构建工具](https://juejin.im/post/5c0b8ece5188254f9e2809fe)
- [基于 vue-cli3 打造属于自己的 UI 库](https://juejin.im/post/5c95c61f6fb9a070c40acf65)
- [了解如何在iPhone X 和所有iOS设备上设计视觉稿](https://www.ui.cn/detail/246980.html)
- [【原创】移动端高清、多屏适配方案](http://www.html-js.com/article/Mobile-terminal-H5-mobile-terminal-HD-multi-screen-adaptation-scheme%203041)
- [从网易与淘宝的font-size思考前端设计稿与工作流](http://www.cnblogs.com/lyzg/p/4877277.html)
- [移动端适配方案-让分辨率来的更猛烈些吧！](https://juejin.im/post/5bc7fb9ef265da0acd20ebeb)
- [vueCli3搭建的vue-vuex-router开发模版](https://github.com/wangyupo/vue-vuex-router)
- [前端工程化（3）：在项目中优雅的设计基于Axios的请求方案](https://juejin.im/post/5c9c6be8f265da610f7c186d)
- [移动端页面适配———多方案解析](https://juejin.im/entry/59ca3c6df265da064f2024af)
## UI

- [网易新闻](https://3g.163.com/touch/#/)
- [vuetify](https://github.com/vuetifyjs/vuetify) https://vuetifyjs.com/zh-Hans/getting-started/quick-start
- [element](https://github.com/ElemeFE/element) http://element-cn.eleme.io/#/zh-CN/component/installation

## 

- [animate.css](https://daneden.github.io/animate.css/)


## 

- [可以生成指定尺寸图片的网站](https://dummyimage.com/)
- [stylie工具轻松搞定css3抛物线动画](http://jeremyckahn.github.io/stylie/)
示例
`https://dummyimage.com/600x400.png/8dc63/fff&text=ColorUI`


>`设备像素比 = 物理像素 / 设备独立像素 // 在某一方向上，x方向或者y方向`

**基于iPhone6的2X倍率进行设计**
**设备宽高为375×667，dpr为2，物理像素×2为750×1334**

```scss
@for $i from 1 through 50 {
  .size { font-size:  #{$i}px #{ $i/50*1rem} $i*2rpx; }
}

@for $i from 1 through 50 {
  .size-#{$i} { font-size: $i/50*1rem; }
}
```

px|rem
---|---|---
1px   | 0.02rem | 2rpx
4px   | 0.08rem | 4rpx
6px   | 0.12rem | 12rpx
10px  | 0.2rem  | 20rpx
12px  | 0.24rem | 24rpx
14px  | 0.28rem | 28rpx
15px  | 0.3rem  | 30rpx
16px  | 0.32rem | 32rpx
18px  | 0.36rem | 36rpx
24px  | 0.48rem | 48rpx
28px  | 0.56rem | 56rpx
32px  | 0.64rem | 64rpx
36px  | 0.72rem | 72rpx
50px  | 1rem    | 100rpx

iphone6/7/8 : 1rem === 55.2px


- CSS权重

```
一个Vue引发的性能问题https://juejin.im/post/5c97691fe51d4522c55f9ead


汝婴啊。
欸，是猪头国相来了吗？
创神篇下阕第28章

node-1群：422910907
https://nodejs.org/api/
en api
http://nodejs.cn/api/
zh api
http://koa.bootcss.com/
koa
https://npms.io/
A better and open source search for node packages
http://javascript.ruanyifeng.com/nodejs/assert.html
阮一峰Nodejs
http://expressjs.com
express
http://expressjs.com/zh-cn/4x/api.html
express api
https://github.com/Pines-Cheng/awesome-nodejs-cn
Nodejs 资源大全中文版
https://thinkjs.org/zh-cn/doc/index.html
thinkjs文档
https://www.awesomes.cn/repos/NodeJS/Frameworks
Node各种资源
```


- [x] 布局
- [x] 背景 图片背景？
- [ ] 文本
- [x] 图标 
- [ ] 按钮
- [ ] 标签
- [ ] 头像
- [ ] 进度条
- [ ] 边框阴影
- [ ] 加载
--- 
- [ ] 操作条
- [ ] 导航栏 
- [ ] 列表
- [ ] 卡片
- [ ] 表单
- [ ] 时间轴
- [ ] 聊天
- [ ] 轮播
- [ ] 模态框
- [ ] 步骤条


### todo

- 如何更好定义公共样式？Bootstrap？
- html页面内容超出后显示水平滚动条的问题https://www.cnblogs.com/JennyLin77/p/5308603.html
- 响应式（RWD） = 所有设备的代码是一样的 / 自适应（AWD）= 不同设备的代码是不一样的 ？