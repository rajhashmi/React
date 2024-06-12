import React, { Component } from 'react'

class ComponentLifecycleMethod extends Component {
    constructor(){
        super()
        console.log("Constructor Mount");
    };

    componentDidMount(){
        console.log("did component Mount");
    }
    static getDerivedStateFromProps(){
        console.log("getDerivedStateFromProps");
    }
     
  render() {
    return (
      <div>
        render Mount
      </div>
    )
  }
}

export default ComponentLifecycleMethod