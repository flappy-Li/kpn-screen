import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import echarts from 'echarts/lib/echarts'
import 'echarts-gl';
import Vcomp from './plugins/index'
Vue.prototype.$echarts = echarts;


Vue.config.productionTip = false;
import './assets/css/style.less';
Vue.use(Vcomp)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
