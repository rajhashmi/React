import React, { Component } from 'react'
import reactDom from 'react-dom'

class Portals extends Component {
  render() {
    return (
     reactDom.createPortal(
        <div>
            <h1>This is Not in Root Div</h1>
        </div>,
        document.getElementById('portal')
     )
    )
  }
}

export default Portals