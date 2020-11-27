import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/salesPlatform',
    name: 'salesPlatform',
    meta: { title: "销售信息平台", intro:'SALES INFORMATION PLATFORM'},
    component: () => import(/* webpackChunkName: "salesPlatform" */ '../views/salesPlatform.vue')
  },
  {
    path: '/energyConsumMonitor',
    name: 'energyConsumMonitor',
    meta: { title: "能耗监控", intro:'ENERGY CONSUMATION MONITORING'},
    component: () => import(/* webpackChunkName: "energyConsumMonitor" */ '../views/energyConsumMonitor.vue')
  },
  {
    path: '/purchaseManage',
    name: 'purchaseManage',
    meta: { title: "采购信息平台", intro:'PURCHASING INFORMATION PLATFORM'},
    component: () => import(/* webpackChunkName: "purchaseManage" */ '../views/purchaseManage.vue')
  },
  {
    path: '/purchasePoll',
    name: 'purchasePoll',
    meta: { title: "销售下单-生产-发货流程", intro:'INFORMATION PLATFORM'},
    component: () => import(/* webpackChunkName: "purchasePoll" */ '../views/purchasePoll.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
