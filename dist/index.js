'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Consumer = exports.Provider = undefined;

var _provider = require('./provider.js');

var _provider2 = _interopRequireDefault(_provider);

var _consumer = require('./consumer.js');

var _consumer2 = _interopRequireDefault(_consumer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _provider2.default;
exports.Consumer = _consumer2.default;