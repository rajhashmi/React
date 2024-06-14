import react from 'react'
import { ContextConsumer } from './Context'

function Greet(){
    return(
        <ContextConsumer>
       <div>hello</div>
    </ContextConsumer>
    // <div>hello</div>
    )
};

export default Greet