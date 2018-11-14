/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 登录
import Login from '@/page/Login/login.vue'
// 营销活动管理
import Home from '@/page/Home/Home'
// 营销活动审核
import Test from '@/page/MarketingManage/test'
import Test2 from '@/page/MarketingManage/test2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home,
      children: [
        {path: '/test', component: Test, name: 'test', hidden: true},
        {path: '/test2', component: Test2, name: 'test2', hidden: true}
      ]
    }
  ]
})
