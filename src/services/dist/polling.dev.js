"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.polling = void 0;

var _http = require("./http.js");

var http = (0, _http.httpCreate)('api/bigscreen/display/');
var polling = {
  getPurchasePolling: function getPurchasePolling(tabId) {
    return http.get("machineInformation".concat(tabId));
  }
};
exports.polling = polling;