import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'

Vue.use(Router)

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
    {
      path: '/layout',
      name: 'layout',
      component: () => import('./components/basics/Layout.vue')
    },
    {
      path: '/background',
      name: 'background',
      component: () => import('./components/basics/Background.vue')
    },
    {
      path: '/icon',
      name: 'icon',
      component: () => import('./components/basics/Icon.vue')
    },
    {
      path: '/tag',
      name: 'tag',
      component: () => import('./components/basics/Tag.vue')
    },
    {
      path: '/animation',
      name: 'animation',
      component: () => import('./components/plugin/Animation.vue')
    }
  ]
})
