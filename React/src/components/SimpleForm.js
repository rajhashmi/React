import React, {Component} from "react";

class Form extends Component{
    constructor(){
        super();
        this.state ={
            Username: "",
            email: "",
            password: ""
        };
    }

    handleInput = (event) =>{
        this.setState({
            Username: event.target.value
        })
    }
    handleEmail = (event) =>{
        this.setState({
            email: event.target.value
        })
    }

    handlePassword = (event) =>{
        this.setState({
            password: event.target.value
        })
        console.log(this.state);
    }
    render(){
        return(
            <div>
                <form>
                    <label>UserName :</label>
                    <input type="text" onChange={this.handleInput} value={this.state.Username}></input>
                    <label>Email :</label>
                    <input type="email" onChange={this.handleEmail} value={this.state.email}></input>
                    <label>Password :</label>
                    <input type="text" onChange={this.handlePassword} value={this.state.password}></input>
                </form>
            </div>
        )
    }
}

export default Form