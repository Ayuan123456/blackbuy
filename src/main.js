import Vue from 'vue'
import App from './App.vue'
import "./assets/statics/site/css/style.css"

import VueRouter from 'vue-router'
Vue.use(VueRouter)


import index from "./components/index.vue"
import cart  from "./components/cart.vue"
import detail from "./components/detail.vue"
let routes= [
  {
    path:"/",
    component:index
  },
  {
    path:"/index",
    component:index
  },
  {
    path:"/cart",
    component:cart
  },
  {
    path:"/detail/:id",
    component:detail
  },
]
let router=new VueRouter(
 { routes}
)
Vue.config.productionTip = false
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
