import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer'
import Landing from './components/layouts/Landing';

import './App.css';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar/>
          <Route exact path='/' component={Landing}/>
            <div className="container">
              <Route exact path="/register" component={Register} />   
              <Route exact path="/login" component={Login} />   
            </div>
          <Footer/>
        </div>
      </BrowserRouter>

    );
  }
}

export default App;
