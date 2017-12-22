import Vue from 'vue'
import Router from 'vue-router'
import form from '@/components/form'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'form',
      component: form
    }
  ]
})
