import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalogs from './catalogs/Catalogs';
import Comicsy  from './comicsy/Comicsy';
import Comments from './comments/Comments';
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

          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;