"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _Home = _interopRequireDefault(require("../views/Home.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

_vue["default"].use(_vueRouter["default"]);

var routes = [{
  path: '/',
  name: 'Home',
  component: _Home["default"]
}, {
  path: '/purchase',
  name: 'purchase',
  meta: {
    title: "销售下单-生产-发货流程",
    intro: 'INFORMATION PLATFORM'
  },
  component: function component() {
    return Promise.resolve().then(function () {
      return _interopRequireWildcard(require('../views/purchase.vue'));
    });
  }
} // {
//   path: '/salesPlatform',
//   name: 'salesPlatform',
//   meta: { title: "销售信息平台", intro:'SALES INFORMATION PLATFORM'},
//   component: () => import(/* webpackChunkName: "salesPlatform" */ '../views/salesPlatform.vue')
// },
// {
//   path: '/energyConsumMonitor',
//   name: 'energyConsumMonitor',
//   meta: { title: "能耗监控", intro:'ENERGY CONSUMATION MONITORING'},
//   component: () => import(/* webpackChunkName: "energyConsumMonitor" */ '../views/energyConsumMonitor.vue')
// },
// {
//   path: '/purchaseManage',
//   name: 'purchaseManage',
//   meta: { title: "采购信息平台", intro:'PURCHASING INFORMATION PLATFORM'},
//   component: () => import(/* webpackChunkName: "purchaseManage" */ '../views/purchaseManage.vue')
// }
];
var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: routes
});
var _default = router;
exports["default"] = _default;