import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/stylesheets.scss';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/LoginForm'

class App extends Component {
  render() {
    return (
      <div className="c-app">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={Home}/>
          </Switch>
        </BrowserRouter>
        <Login />
      </div>
    );
  }
}

export default App;
