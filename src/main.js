import 'babel-polyfill'
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router/router'
import store from './store'
import {
  routerMode,imageUrl
} from './config/env'
import './config/api'
import {
  getToken
} from './config/mUtils'
import Element from 'element-ui'
// import './mock'
import {formatDate} from './lib/formatter'

Vue.use(VueRouter)
Vue.use(Element)

Vue.config.productionTip = false
Vue.prototype.imageUrl = imageUrl

const router = new VueRouter({
  routes,
  mode: routerMode
})

Vue.filter('date',(value,fmt = 'yyyy-MM-dd')=> formatDate(new Date(value),fmt))

//登录拦截
router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (!getToken()) {
      return next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    }
  }
  next() // 确保一定要调用 next()
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')