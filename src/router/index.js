import Vue from 'vue'
import Router from 'vue-router'
import Routes from '../vueRoutes'

Vue.use(Router)

export default new Router({
  routes: Routes,
  mode: 'history'
})
