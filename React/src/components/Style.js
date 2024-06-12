import React, { Component } from 'react'
// import "./style.css"

 class Style extends Component {
    
  render() {
    const style = {
        fontSize:"10px",
        color: "blue"
    }
    return (
      <div>
        <h1 style={style}>Hello</h1>
      </div>
    )
  }
}


export default Style