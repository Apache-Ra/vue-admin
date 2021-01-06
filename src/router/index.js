import Vue from 'vue'
import VueRouter from 'vue-router'
import _import from './lazyRouter'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    redirect: { name: 'home' }
  }, {
    path: '/home',
    name: 'home',
    meta: { title: 'HOME', keepAlive: true, isBack: false },
    component: _import('home/index')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
