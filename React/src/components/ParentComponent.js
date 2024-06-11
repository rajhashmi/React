import React, {Component} from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component{
    constructor(){
        super();
        this.state = {
            message: "Parent"
        }
        this.greet = this.greet.bind(this);
    }

    greet(child){
        alert(`this is ${this.state.message} from ${child}`)
    }

    render(){
        return(
            <ChildComponent greetHandler={this.greet}/>
        )
    }
}

export default ParentComponent