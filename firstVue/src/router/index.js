import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/home'
import forget from '@/components/forget'
import phoveri from '@/components/phoveri'
import finish from '@/components/finish'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'forget',
      component: forget
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/forget',
      name: 'forget',
      component: forget
    },
    {
      path: '/phoveri',
      name: 'phoveri',
      component: phoveri
    },
    {
      path: '/finish',
      name: 'finish',
      component: finish
    }
  ]
})
