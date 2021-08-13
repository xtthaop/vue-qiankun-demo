import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App.vue'
import routes from './router'
import actions from './shared/actions'

import 'normalize.css/normalize.css' // a modern alternative to CSS resets
import '@/styles/index.scss'

import ElementUI from 'element-ui'

Vue.use(ElementUI)

Vue.config.productionTip = false

let instance = null
let router = null

const _import = file => require('@/views' + file).default
function generateAppRoutes(routes) {
  const appRoutes = JSON.parse(JSON.stringify(routes))
  appRoutes.forEach(item => {
    item.component = _import(item.component)
  })
  return appRoutes
}

function render(props) {
  let container

  if (props) {
    container = props.container
    actions.setActions(props)
  }

  let appBase = '/child/app/microapp/web'
  let appRoutes = routes

  if (window.__POWERED_BY_QIANKUN__) {
    appBase = ''
    appRoutes = generateAppRoutes(actions.getRoutes('app-microapp-web'))
  }

  router = new VueRouter({
    base: appBase,
    mode: 'history',
    routes: appRoutes,
  })

  instance = new Vue({
    router,
    render: h => h(App),
  }).$mount(container ? container.querySelector('#app') : '#app')
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

export async function bootstrap() {
  // console.log('[vue] vue app bootstraped')
}

export async function mount(props) {
  // console.log('[vue] props from main framework', props)
  render(props)
}

export async function unmount() {
  instance.$destroy()
  instance.$el.innerHTML = ''
  instance = null
  router = null
}
