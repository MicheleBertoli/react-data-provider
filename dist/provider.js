'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _react2.default.createClass({
  displayName: 'provider',


  childContextTypes: {
    __data: _react2.default.PropTypes.object
  },

  getChildContext: function getChildContext() {
    return {
      __data: this.props
    };
  },

  render: function render() {
    return this.props.children;
  }
});