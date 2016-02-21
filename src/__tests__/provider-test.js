jest.dontMock('../provider')

import React from 'react'
import TestUtils from 'react-addons-test-utils'

const Provider = require('../provider').default

describe('Provider', () => {

  const Child = React.createClass({
    contextTypes: {
      __data:  React.PropTypes.object,
    },
    render() {
      return null
    },
  })

  it('creates a data context using the received props', () => {

    const tree = TestUtils.renderIntoDocument(
      <Provider foo="bar">
        <Child />
      </Provider>
    )
    const child = TestUtils.findRenderedComponentWithType(tree, Child)

    expect(child.context.__data.foo).toBe('bar')

  })

})
