/*
 * 描述: 封装组件库
 * 作者: li
 * 日期: 2020-11-5
 */

import seamless from '@/components/seamless'   // 无缝滚动

const components = {
  seamless,
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