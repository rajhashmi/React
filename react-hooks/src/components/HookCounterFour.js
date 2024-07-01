import React,{useState} from 'react'

function HookCounterFour() {
     const [itmes, setItems] = useState([]);

     const addItem = () => {
        setItems([...itmes, {
            id : itmes.length,
            value: Math.floor(Math.random() * 10) + 1
        }]) 
     }
  return (
    <div>
      <button onClick={addItem}>Add a number</button>
      <ul>
        {itmes.map(el=>(
            <li key={el.id}> {el.value}</li>
        ))}
      </ul>
    </div>
  )
}

export default HookCounterFour
