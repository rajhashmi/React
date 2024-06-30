import React, { Component } from 'react'
import axios from 'axios'

 class Fetch extends Component {
    constructor(props){
        super(props)
        this.state = {
            post: []
        }
    }

    componentDidMount(){
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response =>{
            this.setState({post: response.data})
        })
        .catch(err =>{
            console.log(err);
        })
    }

  render() {
    const {post} = this.state
    return (
      <div>
        this is fetch page
        {
        post.map(post => <div key={post.id}>{post.title}</div>)
        }
      </div>
    )
  }
}
export default Fetch