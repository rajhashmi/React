import React, {useState} from 'react'

function HookCounterThree() {
    const [names, setName] = useState({firstName:"", lastName: ""})

  return (
    <div>
        <form>
            <input
             type='text'
             value={names.firstName} 
             onChange={e => setName({...names, firstName: e.target.value})}/>

            <input type='text'
            value={names.lastName} 
            onChange={e => setName({...names, lastName: e.target.value})}/>

            <h2> Your first name is - {names.firstName}</h2>
            <h2> Your last name is - {names.lastName}</h2>
            <h2>{JSON.stringify(names)}</h2>
        </form>
    </div>
  )
}

export default HookCounterThree
