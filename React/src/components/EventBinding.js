import React, {Component} from "react";

class Eventbinding extends Component{
    constructor(){
        super();
        this.state = {
            Message: "Hello"
        }

        // this.changeState = this.greet.bind(this);
    }
    // greet(){
    //     console.log("hi");
    //     this.setState({
    //         Message: "Good Bye"
    //     })
    // } 
    // 3rd

    greet = () => {
        console.log("hi");
            this.setState({
                Message: "Good Bye"
            })
    }

    render(){
        return(
            <div>
            <h1>{this.state.Message}</h1>
            {/* <button onClick={() => this.greet()}>Click Me!</button>  1 */ } 
            {/* <button onClick={this.greet.bind(this)}>Click Me!</button>  2  */}
            <button onClick={this.greet.bind(this)}>Click Me!</button> 

        </div>
        )
    }
}

export default Eventbinding
// There are 4 ways to bind event