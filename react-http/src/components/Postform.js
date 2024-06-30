import React, { Component } from 'react'
import axios from 'axios'
class Postform extends Component {
    constructor(props){
        super(props);
        this.state = {
            userId: "",
            title: "",
            body: ""
        }
    }

    submitForm = (e) =>{
        e.preventDefault();
        console.log(this.state);
        axios
        .post('https://jsonplaceholder.typicode.com/posts', this.state)
        .then(response => console.log(response))
        .catch(err => console.log(err))
    }
    changeHandler = (e) =>{
        this.setState({[e.target.name]: e.target.value})
    }

  render() {
    const {userId, title, body} = this.state;
    return (
      <div>
        <form onSubmit={this.submitForm}>
            <div>
                <input type='text' name='userId' value={userId} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type='text' name='title' value={title} onChange={this.changeHandler}></input>
            </div>
            <div>
                <input type='text' name='body' value={body} onChange={this.changeHandler}></input>
            </div>
        <button type='submit'>submit</button>
        </form>
      </div>
    )
  }
}
export default Postform