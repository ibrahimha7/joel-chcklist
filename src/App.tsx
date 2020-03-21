import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import './App.scss';
import Container from './Container/Container'


function App(){
    return (
      <BrowserRouter>
        <div className="App">
          <Container />
        </div>
      </BrowserRouter>
    );
  }


export default App;