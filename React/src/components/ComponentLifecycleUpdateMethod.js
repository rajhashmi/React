import React, { Component } from 'react'

class ComponentLifecycleUpdateMethod extends Component {
    constructor(){
        super()
        console.log("Constructor Mount");
    };

    changeState = () =>{
        this.state({
            name:"shahid"
        })
    }

    componentDidMount(){
        console.log("did component Mount");
    }
    static getDerivedStateFromProps(prop, state){
        console.log("getDerivedStateFromProps");
    }

    shouldComponentUpdate(){
        console.log("Lifecycle shouldComponentUpdate");
        return true
    }

    getSnapshotBeforeUpdate(pre, prevState){
        console.log("Lifecycle getSnapshotBeforeUpdate");
        return null
    }
     componentDidUpdate(){
        console.log("component componentDidUpdate");
     }
  render() {
    return (
      <div>
        render Mount
        <button onClick={this.changeState}>click</button>
      </div>
    )
  }
}

export default ComponentLifecycleUpdateMethod
