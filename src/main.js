import Vue from 'vue'
import App from './App.vue'
import "./assets/statics/site/css/style.css"

import VueRouter from 'vue-router'
Vue.use(VueRouter)
import axios from "axios"
axios.defaults.baseURL='http://111.230.232.110:8899'
Vue.prototype.$axios=axios
// 导入时间插件
import moment from "moment"
Vue.filter('golbletime',function(value,template){
  if (template) {
    return moment(value).format(template)
  }else{
    return moment(value).format('YYYY-MM-DD')
  }
})
// 导入了么
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)

import router from "./router"
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
