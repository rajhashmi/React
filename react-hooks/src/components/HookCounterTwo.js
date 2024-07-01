import React, {useState} from 'react'

function HookCounterTwo() {

    const initailCount = 0;
    const [count, setCount] = useState(initailCount)

    const incrementFive = () =>{
        for(let  i = 0; i < 5; i++){
            console.log(count);
            setCount(prevCount => prevCount + 1)
        }
    }

  return (
    <div>
      Cout: {count}
      <button onClick={()=> setCount(initailCount)}>Reset</button>
      <button onClick={()=> setCount(count + 1)}>Increment</button>
      <button onClick={()=> setCount(count - 1)}>Decrement</button>
      <button onClick={incrementFive}>five times</button>
    </div>  
  )
} 

export default HookCounterTwo
