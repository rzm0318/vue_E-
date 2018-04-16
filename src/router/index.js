/*路由器模块*/
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../pages/HomePage/HomePage.vue"
import Classify from "../pages/Classify/Classify.vue"
import Cart from "../pages/Cart/Cart.vue"
import Profile from "../pages/Profile/Profile.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      component: HomePage,
    },
    {
      path: '/classify',
      component: Classify,
    },
    {
      path: '/cart',
      component: Cart,
    },{
      path: '/profile',
      component: Profile,
    },
    {
      path:"/",
      redirect:"/HomePage"
    }
  ]
})
