"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (inAppBase) {
  return function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: "onChangeToState",
      value: function onChangeToState(inPath, inEvent) {
        var _this = this;

        var value = inEvent.target.value;

        if (inPath.indexOf(DOT) > -1) {
          _nextJsCore2.default.path(this.state, inPath, value);
          return new Promise(function (resolve) {
            _this.setState(_this.state, function () {
              resolve();
            });
          });
        } else {
          return new Promise(function (resolve) {
            _this.setState(_defineProperty({}, inPath, value), function () {
              resolve();
            });
          });
        }
      }
    }, {
      key: "onChangeToMemory",
      value: function onChangeToMemory(inPath, inValue) {
        return this.onChangeTo(MEMORY, inPath, inValue);
      }
    }, {
      key: "onChangeToLocal",
      value: function onChangeToLocal(inPath, inValue) {
        return this.onChangeTo(LOCAL, inPath, inValue);
      }
    }, {
      key: "onChangeToSession",
      value: function onChangeToSession(inPath, inValue) {
        return this.onChangeTo(SESSION, inPath, inValue);
      }
    }, {
      key: "onChangesToState",
      value: function onChangesToState(inObject) {
        return this.onChangesTo(STATE, inObject);
      }
    }, {
      key: "onChangesToMemory",
      value: function onChangesToMemory(inObject) {
        return this.onChangesTo(MEMORY, inObject);
      }
    }, {
      key: "onChangesToLocal",
      value: function onChangesToLocal(inObject) {
        return this.onChangesTo(LOCAL, inObject);
      }
    }, {
      key: "onChangesToSession",
      value: function onChangesToSession(inObject) {
        return this.onChangesTo(SESSION, inObject);
      }
    }, {
      key: "onChangesTo",
      value: function onChangesTo(inType, inObject) {
        var _this2 = this;

        var promiseList = _nextJsCore2.default.map(inObject, function (key, value) {
          return _this2["onChangeTo" + _nextJsCore2.default.capitalize(inType)](key, value);
        });
        return Promise.all(promiseList);
      }
    }, {
      key: "onChangeTo",
      value: function onChangeTo(inType, inPath, inEvent) {
        var data = inAppBase.$[inType];
        var value = inEvent.target.value;


        if (inPath.indexOf(DOT) > -1) {
          _nextJsCore2.default.path(data, inPath, value);
          inAppBase.$[inType] = data;
        } else {
          inAppBase.$[inType] = _defineProperty({}, inPath, value);
        }
        return new Promise(function (resolve) {
          resolve();
        });
      }
    }]);

    return _class;
  }();
};

var _nextJsCore = require("@feizheng/next-js-core2");

var _nextJsCore2 = _interopRequireDefault(_nextJsCore);

require("@feizheng/next-capitalize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOT = '.';
var STATE = 'state';
var MEMORY = 'memory';
var LOCAL = 'local';
var SESSION = 'session';