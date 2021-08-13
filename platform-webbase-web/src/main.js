import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import actions from '@/shared/actions'
 
import './permission'
import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss' // global css

import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false
Vue.prototype.$actions = actions

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
