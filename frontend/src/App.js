import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/stylesheets.scss';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/LoginForm'
import DonorList from './components/DonorList'

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
        <DonorList />
      </div>
    );
  }
}

export default App;
