[![Build Status](https://travis-ci.org/MicheleBertoli/react-data-provider.svg?branch=master)](https://travis-ci.org/MicheleBertoli/react-data-provider)

React Data Provider
===================

Beacuse the Context is too mainstream

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
  }
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
