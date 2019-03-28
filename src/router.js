import VueRouter from 'vue-router'
import index from "./components/index.vue"
import cart  from "./components/cart.vue"
import detail from "./components/detail.vue"
import user from "./components/user.vue"
import userIndex from "./components/userIndex.vue"
import useroder from './components/useroder.vue'
import userdetail from "./components/userdetail.vue"
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
  {
    path:"/user",
    component:user,
    children:[
        {
            path:'/',
            component:userIndex
          },

      {
        path:'userIndex',
        component:userIndex
      },
      {
        path:'useroder',
        component:useroder
      },
      {
        path:'userdetail',
        component:userdetail
      }
    ]
  },
]
let router=new VueRouter(
 { routes}
)
export default router