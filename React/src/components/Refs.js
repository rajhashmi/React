import React, { Component } from 'react'

 class Refs extends Component {
    constructor(){
        super();
        this.inputRefs = React.createRef();
        this.setCbRefs = null
    }
    clickHandler = (element) =>{
        this.setCbRefs = element
    }

    componentDidMount(){
        if(this.setCbRefs){
            this.setCbRefs.focus()
        }
        // this.inputRefs.current.focus()
    // console.log(this.inputRefs);
    }
  render() {
    return (
      <div>
            <input type='text' ref={this.inputRefs}></input>
            <input type='text' onClick={this.clickHandler} ref={this.setCbRefs}></input>
      </div>
    )
  }
}

export default Refs