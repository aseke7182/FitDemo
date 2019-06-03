import React, { Component } from 'react';
import Login from './login/Login';
import Comics from './comics/Comics';
import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Login/>
        {/* <Comics/> */}
      </div>
    )
  }
}

export default App;
