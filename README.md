[![Build Status](https://travis-ci.org/MicheleBertoli/react-data-provider.svg?branch=master)](https://travis-ci.org/MicheleBertoli/react-data-provider)

React Data Provider
===================

The [Context](https://facebook.github.io/react/docs/context.html) is a great feature but dealing with it inside your components makes the code less readable and Facebook itself discourages the use of it.
On the other hand, there are some scenarios where you actually need to share data from the root of your app to the rest of the tree.

That's exactly what this package does for you:
you pass some props to the `Provider`,
you wrap your components into the `Consumer` and they receive all the needed props, transparently, from the Context
(if those props exist, are valid and there are no local props with the same name).

The benefits of this approach are:
- no need to use the Context
- components are easier to test
- consistency in the way components receive data

Installation
------------

```sh
$ npm install react-data-provider --save
```

Usage
-----

```jsx
import React from 'react'
import {render} from 'react-dom'
import {Provider, Consumer} from 'react-data-provider'

const Button = React.createClass({
  propTypes: {
    text: React.PropTypes.string
  },
  render() {
    return <button>{this.props.text}</button>
  },
})

const ConsumerButton = Consumer(Button)

render(
  <Provider text="Get tickets!">
    <ConsumerButton />
  </Provider>,
  document.getElementById('root')
)
```

Test
----

```sh
$ npm test
```
