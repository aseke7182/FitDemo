import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth';
import { BrowserRouter, Route } from 'react-router-dom';
import Catalogs from './catalogs/Catalogs';


class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Route path="/auth" component = {Auth}/>
          <Route path="/catalogs" component = {Catalogs}/>
          {/* <Catalogs/> */}
          {/* <Auth/> */}
        </div>
      </BrowserRouter>
    )
  }
}

export default App;