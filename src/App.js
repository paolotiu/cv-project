import React from 'react';
import GeneralInfo from './components/General'
import Accomplishments from './components/Accomplishments'
import './App.css'

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <GeneralInfo />
      </div> 
      <div className="main">
        <Accomplishments />
      </div>
    </div>
  );
}

export default App;
