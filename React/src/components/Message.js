import React, {Component} from 'react'


class Message extends Component{
    constructor(){
        super();
        this.state = {
            Message: "This is Message Page"
        }
    }
    changeState(){
        this.setState({
            Message:"Welcome to Home page"
        })
    }
    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeState()}>Click Me! And Visit Home Page</button>
            </div>

        )
    }
};

export default Message

//  change state when user interrect with page the dom will update and re-render the component