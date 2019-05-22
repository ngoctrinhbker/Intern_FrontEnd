import React, {useState, useEffect} from 'react';
import ReactDom from 'react-dom';
import './App.css';
// import CountClick from './Component/CountClick'

import Count2 from './Component/Count2'
import {name, sur, width} from './Component/Width'

function App() {

  return(
    
    <div className="App">
        <div className="count">
        <h1 id="helo"> HELLO MR.CHOW </h1> 
        <h1 id="learn"> I learn react hook </h1>
        < Count2 />
        </div>
        <div className="changeWidth">
          <h3>TRY TO ENTER YOUR NAME-SURNAME :)) </h3>
          <input {...name}></input>
          <input {...sur}></input>
          <h3>TRY TO CHANGE WINDOW WIDTH </h3>
          <h4>here is your width :)) </h4>
          <h2>{width}</h2>
        </div>      
    </div>
  );
}

export default App;
