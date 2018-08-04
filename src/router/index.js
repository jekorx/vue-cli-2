import Vue from 'vue'
import Router from 'vue-router'

import Index from '@pages/index'
import Test from '@pages/test'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: Index
    },
    {
      path: '/test',
      component: Test
    }
  ]
})
