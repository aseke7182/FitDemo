import React, { Component } from 'react';
import Catalogs from './catalogs/Catalogs';
import Comics from './comics/Comics';

import './App.css';

class App extends Component {
  render(){
    return(
      <div>
        <Catalogs/>
        <Comics/>
      </div>
    )
  }
}

export default App;
