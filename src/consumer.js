import React from 'react'

export default Component => {

  return React.createClass({

    contextTypes: {
      __data: React.PropTypes.object,
    },

    propExists(prop) {
      return this.props[prop]
    },

    contextIsValid(prop) {
      return !Component.propTypes[prop](this.context.__data, prop)
    },

    contextToProps() {
      const newProps = {}
      for (let prop in Component.propTypes) {
        if (!this.propExists(prop) && this.contextIsValid(prop)) {
          newProps[prop] = this.context.__data[prop]
        }
      }
      return newProps
    },

    render() {
      return <Component {...this.contextToProps()} {...this.props} />
    },

  })

}
