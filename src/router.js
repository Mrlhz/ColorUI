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
function getRouters () {
  // require.context中要搜索的目录不能动态拼接，true 搜索它的子目录
  return require.context('components', true, /\.vue$/).keys().map((url) => {
    const component = url.replace('./', '') // './basics/Avatar.vue' => 'basics/Avatar.vue'
    const start = url.lastIndexOf('/')
    const end = url.lastIndexOf('.')
    const name = url.substring(start + 1, end) // './basics/Avatar.vue' => 'Avatar'
    const path = `/${name}`.toLowerCase()
    return {
      path,
      name,
      component: require(`components/${component}`).default
    }
  })
}

const routers = getRouters()
// console.log(routers)

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
    ...routers
  ]
})
