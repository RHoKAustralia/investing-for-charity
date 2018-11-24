import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/stylesheets.scss';
import './App.scss';
import TopNavbar from './components/Navbar';
import Home from './components/Home';
import DonorList from './components/DonorList';
import AddDonor from './components/AddDonor'
import ViewDonor from './components/ViewDonor'
import Auth from './components/Auth';


class App extends Component {
  render() {
    return (
      <div className="c-app">
        <TopNavbar />
        <Auth>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={DonorList} />
              <Route exact path="/add-donor" component={AddDonor} />
              <Route exact Path='/view-donor/' component={ViewDonor}/>
            </Switch>
          </BrowserRouter>
        </Auth>
      </div>
    );
  }
}

export default App;
