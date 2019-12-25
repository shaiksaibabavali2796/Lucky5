import Vue from 'vue'
import Router from 'vue-router'
import Game from '@/components/game'
import Mainpage from '@/components/mainpage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'mainpage',
      component: Mainpage
    },
    {
      path: '/game',
      name: 'game',
      component: Game
    },

  ]
})
