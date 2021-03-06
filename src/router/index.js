import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'polling',
    meta: { title: "采购流程", intro:'PURCHASE PLATFORM'},
    component: () => import(/* webpackChunkName: "polling" */ '../views/polling.vue'),
  },
  // {
  //   path: '/purchase',
  //   name: 'purchase',
  //   meta: { title: "销售下单-生产-发货流程", intro:'INFORMATION PLATFORM'},
  //   component: () => import(/* webpackChunkName: "purchase" */ '../views/purchase.vue')
  // },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
