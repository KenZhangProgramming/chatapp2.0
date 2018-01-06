import Login from './components/login.vue'
import Register from './components/register.vue'

export default [
  { path: '/',
    component: Login},
  { path: '/login',
    name: 'login',
    component: Login},
  { path: '/register',
    name: 'register',
    component: Register}
]
