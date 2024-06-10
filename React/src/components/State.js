import React,  {Component} from 'react' 

class StateAdvanced extends Component{
    constructor(){
        super();
        this.state = ({
            count: 0
        })
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // });

        this.setState((prevState, props) =>({
            count: prevState.count + 1
        }));
        console.log(this.state.count);
    }

    incrementFive(){
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment()
    }
    render(){
        return(
            <div>
                    <p>{this.state.count}</p>   
                    <button onClick={()=> this.incrementFive()}>Click Me!</button>             
            </div>


        )
    }
}
export default StateAdvanced


//  state are too good in there own way for example if you made more DOM manipulation it will do al it once and remember that setStae it is asyc 
//  we pass function as well in setState which mean the first para meter will be the last state