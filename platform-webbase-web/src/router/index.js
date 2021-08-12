import Vue from 'vue'
import VueRouter from 'vue-router'

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(VueRouter)

import Home from '@/views/home'
import Page404 from '@/views/error-page/404'
import Page403 from '@/views/error-page/403'
import Layout from '@/layout'
import Portal from '@/views/portal'

const routes = [
  {
    path: '/',
    redirect: '/platform/webbase/web',
    component: Layout,
    children: [
      {
        path: '/platform/webbase/web',
        name: 'Home',
        component: Home
      },
      {
        path: '/app/*',
        name: 'Portal',
        component: Portal
      }
    ],
  },
  {
    path: '/platform/webbase/web/404',
    name: 'Page404',
    component: Page404
  },
  {
    path: '/platform/webbase/web/403',
    name: 'Page403',
    component: Page403
  },
]

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      return { x: 0, y: 0 }
    }
  }
})

export default router
