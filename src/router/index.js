/*路由器模块*/
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../pages/HomePage/HomePage.vue"
import Classify from "../pages/Classify/Classify.vue"
import List from "../pages/Classify/List/List.vue"
import Brand from "../pages/Classify/Brand/Brand.vue"
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
      children:[
          {
            path:'/classify/list',
            component: List
          },
          {
            path:'/classify/brand',
            component: Brand
          },
          {
            path: '',
            redirect: '/classify/list'
          },
      ]

    },
    {
      path: '/cart',
      component: Cart,
    },
    {
      path: '/profile',
      component: Profile,
    },
    {
      path:"/",
      redirect:"/homePage"
    }
  ],

})
