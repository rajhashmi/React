import React, { Component } from 'react'

const UpdatedComponents = (OriginalComponents) => {
    
    class HigherOrderComponents extends Component {
        constructor(props){
            super(props);
            this.state = {
                count : 0
            }
        }

        incrementCount = () =>{
            this.setState(prevState => {
                return {count: prevState.count + 1}
            })
        }
      render() {
        return (
          <div>
            <OriginalComponents
            count={this.state.count}
            incrementCounter={this.incrementCount}
            />
          </div>
        )
      }
    }
    return HigherOrderComponents
}
export default UpdatedComponents