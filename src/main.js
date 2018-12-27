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

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
