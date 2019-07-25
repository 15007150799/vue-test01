import Vue from 'vue'
import Router from 'vue-router'
import Good from '@/components/good'
import Ratting from '@/components/ratting'
import Seller from '@/components/seller'
import Home from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/home',
      component:Home
     },{
   path:'/good',
   component:Good
  },
  {
    path:'/ratting',
    component:Ratting
   },
   {
    path:'/seller',
    component:Seller
   },
   {
    path: '/',
    redirect: '/home'
 },
  ]
})
