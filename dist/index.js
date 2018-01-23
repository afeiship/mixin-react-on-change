'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

exports.default = function (inAppBase, inContext) {
  return function () {
    function _class() {
      _classCallCheck(this, _class);
    }

    _createClass(_class, [{
      key: 'onChangeToState',
      value: function onChangeToState(inPath, inValue) {
        var data = _nextJsCore2.default.path(inContext.state, inPath);
        if (inPath.indexOf(DOT) > -1) {
          _nextJsCore2.default.path(data, inPath, inValue);
          this.setState(_defineProperty({}, inPath, data));
        } else {
          this.setState({ inPath: inValue });
        }
      }
    }, {
      key: 'onChangeToMemory',
      value: function onChangeToMemory(inPath, inValue) {
        this.onChangeTo('memory', inPath, inValue);
      }
    }, {
      key: 'onChangeToLocal',
      value: function onChangeToLocal(inPath, inValue) {
        this.onChangeTo('local', inPath, inValue);
      }
    }, {
      key: 'onChangeToSession',
      value: function onChangeToSession(inPath, inValue) {
        this.onChangeTo('session', inPath, inValue);
      }
    }, {
      key: 'onChangeTo',
      value: function onChangeTo(inType, inPath, inValue) {
        var type = inType || STATE;
        var data = inAppBase.$[inType];

        if (inPath.indexOf(DOT) > -1) {
          _nextJsCore2.default.path(data, inPath, inValue);
          inAppBase.$[type] = data;
        } else {
          inAppBase.$[type] = _defineProperty({}, inPath, inValue);
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

var STATE = 'state';
var DOT = '.';