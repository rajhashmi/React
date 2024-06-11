import React, {Component} from "react";

class ConditionalRendering extends Component{
    constructor(){
        super();
        this.state = {
            isLogIn:false
        };
        this.changeUser = this.changeUser.bind(this);
    }
    changeUser(){
        this.setState({
          isLogIn: true
        })
    }
    render(){
        if(this.state.isLogIn){
            return <div>Hello Shahid</div>
        }else{
            return( 
                <div>
                    <div>Hello User</div>
                    <button onClick={this.changeUser}>Login In</button>
                </div>
            )

        }
        // return(
        //     <div></div>
        // )
    }
}
export default ConditionalRendering;