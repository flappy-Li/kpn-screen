"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.filter = exports.errors = exports.httpCreate = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var APP_APIPATH = 'http://123.135.123.146:39564/';
var env = {
  apiPath: APP_APIPATH
};

var config = _objectSpread({}, env, {
  errors: function errors(err) {
    var msg = err.code === "ECONNABORTED" ? "网络超时，请刷新重试" : err.msg || err.message || err.toString();
    showToast(msg);
    console.log(err);
  },
  filter: function filter(res) {
    var status = res.status,
        data = res.data;

    if (status >= 200 && status < 300) {
      res.ok = true;
      return res;
    }

    this.errors(data.msg);
    res.ok = false;
    return res;
  }
});

var httpCreate = function httpCreate(baseURL) {
  var timeout = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 20e3;

  var instance = _axios["default"].create({
    baseURL: config.apiPath + baseURL,
    timeout: timeout,
    withCredentials: false // headers: {'Cache-Control': 'no-cache', Pargma: 'no-cache'}

  });

  instance.interceptors.response.use(config.filter.bind(config));
  return instance;
};

exports.httpCreate = httpCreate;
var errors = config.errors,
    filter = config.filter;
exports.filter = filter;
exports.errors = errors;