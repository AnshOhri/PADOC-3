import Signup from './components/signup'
import './App.css';
import React from 'react'

function App() {
  return (
    <div className='home'>
      <div className='front_page'>
        <h1>Padoc</h1>
        <h3>
          May 29, 2022 - Wikipedia is a free online encyclopedia, created and edited by volunteers around the world and hosted by the Wikimedia Foundation.
        </h3>
        <img src="padoc.png"></img>
      </div>
      <div className="App">
        <Signup/>
      </div>
    </div>
  );
}

export default App;
