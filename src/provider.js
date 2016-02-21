import React from 'react'

export default React.createClass({

  childContextTypes: {
    __data: React.PropTypes.object,
  },

  getChildContext: function() {
    return {
      __data: this.props,
    }
  },

  render() {
    return this.props.children
  },

})
