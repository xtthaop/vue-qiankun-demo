import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Test1 from '@/views/test1'
import Test2 from '@/views/test2'

const routes = [
  {
    path: '/test1',
    name: 'Test1',
    component: Test1
  },
  {
    path: '/test2',
    name: 'Test2',
    component: Test2
  },
]

export default routes
