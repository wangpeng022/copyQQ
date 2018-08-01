import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  model: history,
  routes: [
    {
      path: '/',
      name: 'login',
      component: require('@/components/login').default
    },
    {
      path: '/mainPage',
      name: 'mainPage',
      component: require('@/components/mainPage').default
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
