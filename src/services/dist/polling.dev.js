"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polling = void 0;

var _http = require("./http.js");

var http = (0, _http.httpCreate)('dashboard/');
var polling = {
  getPurchasePolling: function getPurchasePolling(orderId) {
    return http.get("liucheng?s=".concat(orderId));
  }
};
exports.polling = polling;