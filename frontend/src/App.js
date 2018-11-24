import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/stylesheets.scss';
import './App.scss';
import Header from './components/Header';
import Home from './components/Home';
import DonorList from './components/DonorList'
import Auth from './components/Auth';

class App extends Component {
  render() {
    return (
      <div className="c-app">
        <Header />
        <Auth>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={DonorList} />
            </Switch>
          </BrowserRouter>
        </Auth>
      </div>
    );
  }
}

export default App;
