import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import './index.css'
import Character from './components/Character'
import styled from 'styled-components';


const AppStyle = styled.div`

  margin: 100px;
  border: 1px solid mediumpurple;
  box-shadow: 0px 1px 40px -2px mediumpurple;
  border-radius: 20px;
  
  




`
const App = () => {

  const [characters, setCharacters] = useState([]);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
      .then((res)=>{
        setCharacters(res.data.results)
      })
      .catch(err => {
        console.log('ERROR')
      })
  },[])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <AppStyle>
    <div className="App">
      <h1 className="Header">Characters</h1>
      <Character characters={characters} />
    </div>
    </AppStyle>
  );
}

export default App;
