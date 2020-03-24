import Vue from 'vue'

import VueLazyload from 'vue-lazyload'

import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

import App from './App.vue'
import router from './router'
import store from './store'
import Alert from 'packages/alert/alert'

// import '@/assets/stylesheets/index.scss'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  error: require('assets/images/img.png'),
  loading: require('assets/images/Loading.png')
})

Vue.prototype.$Alert = Alert

requireComponents()

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

/**
 * @description 基础组件的自动化全局注册
 * @see https://cn.vuejs.org/v2/guide/components-registration.html#基础组件的自动化全局注册
 */
function requireComponents () {
  const requireComponent = require.context(
    // 其组件目录的相对路径
    './common',
    // 是否查询其子目录
    true,
    // 匹配基础组件文件名的正则表达式
    /\.(vue|js)$/
  )

  requireComponent.keys().forEach(fileName => {
    // 获取组件配置
    const componentConfig = requireComponent(fileName)

    // 获取组件的 PascalCase 命名
    const componentName = upperFirst(
      camelCase(
        // 获取和目录深度无关的文件名
        fileName
          .split('/')
          .pop()
          .replace(/\.\w+$/, '')
      )
    )
    // console.log(componentName, componentConfig)

    // 全局注册组件
    Vue.component(
      componentName,
      // 如果这个组件选项是通过 `export default` 导出的，
      // 那么就会优先使用 `.default`，
      // 否则回退到使用模块的根。
      componentConfig.default || componentConfig
    )
  })
}
