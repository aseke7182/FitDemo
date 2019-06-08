import React, { Component } from 'react';
import './App.css';
import Auth from './Auth/Auth';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Catalogs from './catalogs/Catalogs';
import Comicsy  from './comicsy/Comicsy';
// import Comments from './comments/Comments';
import Header from './header/Header';
import Footer from './footer/Footer';
import Mainpage from './Mainpage/mainpage';
import Register from './register/register';
import Basket from './Basket/Basket';

class App extends Component{
  render(){
    return(
      <BrowserRouter>
        <div>
          <Header/>
          <Switch>
          <Route exact path='/' component= {Mainpage}/>
          {/* <Route path="/catalogs/:comics_id/comments" component = { Comments}/> */}
          <Route path="/catalogs/:comics_id" component = { Comicsy }/>
          <Route path="/catalogs" component = { Catalogs}/>
          <Route path="/auth" component = {Auth}/>
          <Route path="/register" component = {Register}/>
          <Route path="/basket" component={Basket}/>
          </Switch>
          <Footer/>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;