import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth';
import { BrowserRouter, Route } from 'react-router-dom';
import Catalogs from './catalogs/Catalogs';
import Comicsy  from './comicsy/Comicsy'
import Header from './header/Header';
import Footer from './footer/Footer';
import Mainpage from './Mainpage/mainpage';
import Register from './register/register';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Route exact path='/' component= {Mainpage}/>
          <Route path="/catalogs" component = { Catalogs}/>
          <Route path="/catalogs" component = { Comicsy}/>
          <Route path="/auth" component = {Auth}/>
          <Route path="/register" component = {Register}/>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;