import React from 'react';
import GeneralInfo from './components/General'
import Accomplishments from './components/Accomplishments'
import Header from './components/Header'
import './App.css'

function App() {
  return (
    <div className="App">
      <Header />
      <div className="info">
        <GeneralInfo />
      </div> 
      <div className="main">
        <Accomplishments />
      </div>
    </div>
  );
}

export default App;
