import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import SetupPage from '@/components/SetupPage'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    name: 'Hello',
    component: Hello
  }, {
    path: '/setup',
    name: 'Setup',
    component: SetupPage
  }]
})
