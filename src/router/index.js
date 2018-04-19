/*路由器模块*/
import Vue from 'vue'
import Router from 'vue-router'
import HomePage from "../pages/HomePage/HomePage.vue"
import Classify from "../pages/Classify/Classify.vue"
import List from "../pages/Classify/List/List.vue"
import Brand from "../pages/Classify/Brand/Brand.vue"
import Cart from "../pages/Cart/Cart.vue"
import Profile from "../pages/Profile/Profile.vue"
import AllBrand from "../pages/AllBrand/AllBrand.vue"
import Home from "../components/Home/Home.vue"
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homepage',
      component: HomePage,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/classify',
      component: Classify,
      children:[
          {
            path:'/classify/list',
            component: List,
            meta:{
              showFooter:true
            }
          },
          {
            path:'/classify/brand',
            component: Brand,
            meta:{
              showFooter:true
            }
          },
          {
            path: '',
            redirect: '/classify/list'
          },
      ],


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
      path:"/allbrand",
      component:AllBrand
    },
    {
      path: '/home',
      component:Home,
    },
    {
      path:"/",
      redirect:"/homePage"
    }

  ],

})
