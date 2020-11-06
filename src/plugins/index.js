/*
 * 描述: 封装组件库
 * 作者: li
 * 日期: 2020-11-5
 */


import chinaMap from '@/components/chinaMap' // 2.5D中国地图
import seamless from '@/components/seamless'   // 无缝滚动
import lineEchart from '@/components/lineEchart' // 折线图
// import dynamicLine from '@/components/dynamicLine' //动态折线图
import szBar from '@/components/szBar' //双轴柱状图
import rankingbar from '@/components/rankingbar' //排名柱状图


const components = {
    chinaMap,
    seamless,
    lineEchart,
    szBar,
    rankingbar,
    // dynamicLine,

};

const install = (Vue = {}) => {
    if (install.installed) return;
    Object.keys(components).forEach(component => {
      Vue.component(components[component].name, components[component]);
    });
  
    install.installed = true;
  };
  install.installed = false;
  
  if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
    install.installed = true;
  }
  
  let Vcomp = {
    ...components,
    install
  };
  
  
  export default Vcomp