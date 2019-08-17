import Vue from 'vue'

import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from './router'
import store from './store'
import Alert from './common/alert/alert'

import '@/assets/stylesheets/reset.scss'
import '@/assets/stylesheets/index.scss'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  error: './assets/images/img.png',
  loading: './assets/images/Loading.png'
})

Vue.prototype.$Alert = Alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
