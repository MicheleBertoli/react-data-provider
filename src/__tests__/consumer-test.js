jest.dontMock('../provider')
jest.dontMock('../consumer')

import React from 'react'
import TestUtils from 'react-addons-test-utils'

const Provider = require('../provider').default
const Consumer = require('../consumer').default

describe('Consumer', () => {

  const Child = React.createClass({
    propTypes: {
      foo: React.PropTypes.string,
    },
    render() {
      return null
    },
  })
  const ConsumerChild = Consumer(Child)

  it('transforms the context to props for the specified types', () => {

    const tree = TestUtils.renderIntoDocument(
      <Provider foo="bar">
        <ConsumerChild />
      </Provider>
    )
    const child = TestUtils.findRenderedComponentWithType(tree, Child)

    expect(child.props.foo).toBe('bar')

  })

  it('transforms the context to props for the specified types only', () => {

    const tree = TestUtils.renderIntoDocument(
      <Provider foo="bar" yo="yo">
        <ConsumerChild />
      </Provider>
    )
    const child = TestUtils.findRenderedComponentWithType(tree, Child)

    expect(child.props.yo).toBeUndefined()

  })

  it('transforms the context to props only if they match the type', () => {

    const tree = TestUtils.renderIntoDocument(
      <Provider foo={123}>
        <ConsumerChild />
      </Provider>
    )
    const child = TestUtils.findRenderedComponentWithType(tree, Child)

    expect(child.props.foo).toBeUndefined()

  })

  it('transforms the context to props only if there are no local props with the same name', () => {

    const tree = TestUtils.renderIntoDocument(
      <Provider foo="bar">
        <ConsumerChild foo="yo" />
      </Provider>
    )
    const child = TestUtils.findRenderedComponentWithType(tree, Child)

    expect(child.props.foo).toBe('yo')

  })

})
