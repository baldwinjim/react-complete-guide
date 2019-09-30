import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
  const [ personsState, setPersonsState ] = useState({
      persons: [
        { name: 'Jim', age: 50 },
        { name: 'Max', age: 28 },
        { name: 'Manu', age: 26 },
      ],
      otherState: 'some other value'
    });

    const switchNameHandler = () => {
      //console.log('Was Clicked!');
      //personsState.persons[0].name = 'James';
      setPersonsState({
        persons: [
          { name: 'James', age: 50 },
          { name: 'Max', age: 28 },
          { name: 'Manu', age: 30 }
        ]
        });
      };
    

    return (
      <div className="App">
        <h1>Hi, I am a React App</h1>
        <p>This is really working!</p>
        <button onClick={switchNameHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}/>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}>My Hobbies: Racing</Person>
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null,  'Hi, I\'m a React App!!!'))
}


export default app;
