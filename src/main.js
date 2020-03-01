import Vue from 'vue'

import VueLazyload from 'vue-lazyload'

import App from './App.vue'
import router from './router'
import store from './store'
import Alert from './common/alert/alert'

import '@/assets/stylesheets/reset.scss'
import '@/assets/stylesheets/index.scss'
import '@/assets/stylesheets/colorui.scss'

Vue.config.productionTip = false

Vue.use(VueLazyload, {
  error: require('assets/images/img.png'),
  loading: require('assets/images/Loading.png')
})

Vue.prototype.$Alert = Alert

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
