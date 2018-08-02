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
      component: require('@/components/mainPage').default,
      children: [
        {
          path: '/message',
          name: 'message',
          component: require('@/components/message').default
        },
        {
          path: '/friends',
          name: 'friends',
          component: require('@/components/friends').default
        },
        {
          path: '/cloudFiles',
          name: 'cloudFiles',
          component: require('@/components/cloudFiles').default
        },
      ],redirect: '/message'
    },
    {
      path: '*',
      redirect: '/'
    }
  ]
})
