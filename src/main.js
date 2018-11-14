// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
/* jshint esversion: 6 */
import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/icon/iconfont.css'
import App from './App'
import router from './router'
import axios from 'axios'
import api from './api/api'
import http from './api/http'

// 初始化样式，清除浏览器默认样式
import './assets/css/reset.css'

Vue.config.productionTip = false
// Vue.use(ElementUI)
Vue.use(ElementUI, { size: 'small', zIndex: 3000 })
// 改写为原型属性
Vue.prototype.$ajax = axios
Vue.prototype.api = api
Vue.prototype.http = http

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
