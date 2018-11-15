/* jshint esversion: 6 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
// 登录
import Login from '@/page/Login/login.vue'
// 主页
import Home from '@/page/Home/Home'
// 营销管理
import MCManage from '@/page/MarketingManage/MCManage'
import MCAudit from '@/page/MarketingManage/MCAudit'
import MCMonitoring from '@/page/MarketingManage/MCMonitoring'
import PrizeManage from '@/page/MarketingManage/PrizeManage'
import SIParameter from '@/page/MarketingManage/SIParameter'
import WPRecord from '@/page/MarketingManage/WPRecord'
import LotteryRecord from '@/page/MarketingManage/LotteryRecord'

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
        {path: '/MCM', component: MCManage, name: 'MCManage', hidden: true},
        {path: '/MCA', component: MCAudit, name: 'MCAudit', hidden: true},
        {path: '/MCO', component: MCMonitoring, name: 'MCMonitoring', hidden: true},
        {path: '/PM', component: PrizeManage, name: 'PrizeManage', hidden: true},
        {path: '/SIP', component: SIParameter, name: 'SIParameter', hidden: true},
        {path: '/WPR', component: WPRecord, name: 'WPRecord', hidden: true},
        {path: '/LR', component: LotteryRecord, name: 'LotteryRecord', hidden: true}
      ]
    }
  ]
})
