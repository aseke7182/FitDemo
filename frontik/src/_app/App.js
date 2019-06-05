import React, { Component } from 'react';

import Catalogs from './catalogs/Catalogs';
import Comicsy from './comicsy/Comicsy';

class App extends Component{
  render(){
    return(
      <div>
        Hello
        <Catalogs/>
        <Comicsy/>
      </div>
    )
  }
}

export default App;