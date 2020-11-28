"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _seamless = _interopRequireDefault(require("@/components/seamless"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// 无缝滚动
var components = {
  seamless: _seamless["default"]
};

var install = function install() {
  var Vue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (install.installed) return;
  Object.keys(components).forEach(function (component) {
    Vue.component(components[component].name, components[component]);
  });
  install.installed = true;
};

install.installed = false;

if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
  install.installed = true;
}

var Vcomp = _objectSpread({}, components, {
  install: install
});

var _default = Vcomp;
exports["default"] = _default;