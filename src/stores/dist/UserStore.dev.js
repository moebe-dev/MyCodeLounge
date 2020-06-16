"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _mobx = require("mobx");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * UserStores
 */
var UserStore = function UserStore() {
  _classCallCheck(this, UserStore);

  (0, _mobx.extendObservable)(this, {
    loading: true,
    isLoggedIn: false,
    username: ""
  });
};

var _default = new UserStore();

exports["default"] = _default;