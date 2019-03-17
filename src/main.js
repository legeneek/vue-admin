import Vue from 'vue'
import VueRouter from 'vue-router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'normalize.css'

import '@/public/styles/index.less'
import App from '@/components/App'
import routes from '@/router'
import store from '@/store'
import { getToken } from '@/utils/token'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
  // mode: 'history',
  routes
})
const noCheckList = ['/login']

router.beforeEach((to, from, next) => {
  let nextPath = next.path
  if (getToken()) {
    if (to.path === '/login') {
      nextPath = '/'
    }
    if (store.getters.roles.length === 0) {
      // get user info
      store.dispatch('getUserInfo').then(() => {
        next({path: nextPath})
      }).catch(() => {
        
      })
    } else {
      next({path: nextPath})
    }
  } else {
    // need login 
    if (noCheckList.indexOf(to.path) === -1) {
      nextPath = '/login'
    }
    next({path: nextPath})
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App)
})