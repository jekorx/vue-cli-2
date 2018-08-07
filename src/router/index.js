import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      component: () => import(/* webpackChunkName: "index" */'@pages/index')
    },
    {
      path: '/test',
      component: () => import(/* webpackChunkName: "test" */'@pages/test')
    }
  ]
})
