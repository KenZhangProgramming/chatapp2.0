import Vue from 'vue'
import Router from 'vue-router'
import Routes from '../vueRoutes'
import Vuetify from 'vuetify'
import('../../node_modules/vuetify/dist/vuetify.min.css')

Vue.use(Vuetify)
Vue.use(Router)

export default new Router({
  routes: Routes,
  mode: 'history'
})
