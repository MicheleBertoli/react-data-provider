'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (Component) {

  return _react2.default.createClass({

    contextTypes: {
      __data: _react2.default.PropTypes.object
    },

    propExists: function propExists(prop) {
      return this.props[prop];
    },
    contextIsValid: function contextIsValid(prop) {
      return !Component.propTypes[prop](this.context.__data, prop);
    },
    contextToProps: function contextToProps() {
      var newProps = {};
      for (var prop in Component.propTypes) {
        if (!this.propExists(prop) && this.contextIsValid(prop)) {
          newProps[prop] = this.context.__data[prop];
        }
      }
      return newProps;
    },
    render: function render() {
      return _react2.default.createElement(Component, _extends({}, this.contextToProps(), this.props));
    }
  });
};