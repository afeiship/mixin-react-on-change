'use strict';

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
      key: 'onChangeToState',
      value: function onChangeToState(inPath, inValue) {
        var data = _nextJsCore2.default.path(this.state, inPath);
        if (inPath.indexOf(DOT) > -1) {
          _nextJsCore2.default.path(data, inPath, inValue);
          this.setState(data);
        } else {
          this.setState(_defineProperty({}, inPath, inValue));
        }
      }
    }, {
      key: 'onChangeToMemory',
      value: function onChangeToMemory(inPath, inValue) {
        this.onChangeTo(MEMORY, inPath, inValue);
      }
    }, {
      key: 'onChangeToLocal',
      value: function onChangeToLocal(inPath, inValue) {
        this.onChangeTo(LOCAL, inPath, inValue);
      }
    }, {
      key: 'onChangeToSession',
      value: function onChangeToSession(inPath, inValue) {
        this.onChangeTo(SESSION, inPath, inValue);
      }
    }, {
      key: 'onChangeTo',
      value: function onChangeTo(inType, inPath, inValue) {
        var data = inAppBase.$[inType];

        if (inPath.indexOf(DOT) > -1) {
          _nextJsCore2.default.path(data, inPath, inValue);
          inAppBase.$[inType] = data;
        } else {
          inAppBase.$[inType] = _defineProperty({}, inPath, inValue);
        }
      }
    }]);

    return _class;
  }();
};

var _nextJsCore = require('next-js-core2');

var _nextJsCore2 = _interopRequireDefault(_nextJsCore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var DOT = '.';
var MEMORY = 'memory';
var LOCAL = 'local';
var SESSION = 'session';