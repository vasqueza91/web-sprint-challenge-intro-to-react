import React, { useState, useEffect } from 'react';
import axios from 'axios'
import './App.css';
import Character from './components/Character'

const App = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      axios.get('https://swapi.dev/api/people')
      .then((res) => {
        console.log(res)
        setData(res.data)
      })
      .catch()
    },[])
  
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <div className='container'>
      {data.map((char, id) => {
        return <Character key={id} char={char} />
      })}
    </div>
    </div>
  );
}

export default App;
