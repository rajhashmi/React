import React, { Component } from 'react'
import List from './List';

  class NameList extends Component {
    render() {
      const persons = [
        {
          id: 1,
          name: 'Bruce',
          age: 30,
          skill: 'React'
        },
        {
          id: 2,
          name: 'Clark',
          age: 25,
          skill: 'Angular'
        },
        {
          id: 3,
          name: 'Diana',
          age: 28,
          skill: 'Vue'
        }
      ];
      const personList = persons.map(person=> <List key={person.id} person={person}/>)
      console.log(personList);
    return (
        <div>{personList}</div>
    )
  }
}

export default NameList