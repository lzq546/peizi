// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import '@/assets/style/index.scss'
import 'lib-flexible'
import store from '@/store/store.js'
import echarts from 'echarts'
import axios from 'axios'// 引入axios
Vue.prototype.$axios = axios// 把axios挂载到vue上

Vue.prototype.$echarts = echarts

Vue.use(MintUI)
Vue.config.productionTip = false

// router.beforeEach((to, from, next) => {
//   // 1.获取令牌：token
//   var token = localStorage.getItem('mytoken')
//   // 如果token有值，说明曾经登陆地 ，说明拥有合法访问的令牌
//   if (token) {
//     next()
//   } else {
//     // 如果是访问默认可以访问的页，如登陆，那么也不需要有令牌
//     if (to.path === '/login') { // 判断是不是访问登陆页面
//       next()
//     } else {
//       next({path: '/login'})
//     }
//   }
// })

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
