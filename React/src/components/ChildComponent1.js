import React, { Component } from 'react'
import UpdatedComponents from './HigherOrderComponents'
 class ChildComponent1 extends Component {
  render() {
    const {count, incrementCounter} = this.props
    return (
      <div>
        <button onClick={incrementCounter}>Click Me!</button>
        Click {count} Times
      </div>
    )
  }
}

export default UpdatedComponents(ChildComponent1)