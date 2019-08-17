import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

/**
 * @description 自动配置路由
 *
 * @see https://www.webpackjs.com/guides/dependency-management/
 * @param {*} dir
 * @param {*} context
 * @returns
 * @todo 可以把`basics`，`components`，`plugin`统一处理，减少全局变量
 */
function getRouters (dir, context) {
  return context.keys().map((url) => {
    const start = url.indexOf('/')
    const end = url.lastIndexOf('.')
    const name = url.substring(start + 1, end) // './Background.vue' => 'background'
    const path = `/${name}`.toLowerCase()
    console.log()
    return {
      path,
      name,
      component: require(`components/${dir}/${name}.vue`).default
    }
  })
}

const basicsContext = require.context('components/basics', false, /\.vue$/) // require.context中要搜索的目录不能动态拼接，false 不搜索它的子目录
const componentContext = require.context('components/components', false, /\.vue$/)
const pluginContext = require.context('components/plugin', false, /\.vue$/)

const basicsRouters = getRouters('basics', basicsContext)
const componentRouters = getRouters('components', componentContext)
const pluginRouters = getRouters('plugin', pluginContext)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'tab-active',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/component',
      name: 'component',
      component: () => import('./views/Component.vue')
    },
    {
      path: '/plugin',
      name: 'plugin',
      component: () => import('./views/Plugin.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    // {
    //   path: '/animation',
    //   name: 'animation',
    //   component: () => import('./components/plugin/Animation.vue')
    // },
    // {
    //   path: '/modal',
    //   name: 'modal',
    //   component: () => import('./components/components/Modal.vue')
    // },
    ...basicsRouters,
    ...componentRouters,
    ...pluginRouters
  ]
})
