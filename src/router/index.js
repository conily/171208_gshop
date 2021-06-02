import Vue from 'vue'
import Router from 'vue-router'
import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  // 配置多个路由，使用数组来存储
  routes: [
    {
      path: '/msite',
      component: MSite,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/order',
      component: Order,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/search',
      component: Search,
      meta:{
        showFooter:true
      }
    },
    {
      path: '/profile',
      component: Profile,
      // meta对象的属性默认时false
      meta:{
        showFooter:true
      }
    },
    {
      path:'/',
      redirect:'msite'
    },
    {
      path: '/login',
      component: Login
    },
  ]
})
