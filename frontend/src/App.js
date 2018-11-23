import React, { Component } from 'react';
import logo from './images/temp-logo-white.png';
import './App.scss';
import './styles/stylesheets.scss';

class App extends Component {
  render() {
    return (
      <div className="c-app">
        <div className="c-app__header-container">
          <header className="g-flex__container g-flex__container--no-wrap g-flex__container--align-center g-inner-wrapper g-inner-wrapper--default c-app__header">
            <img src={logo} className="g-flex__item c-app__logo" alt="Investing for charity logo" />
            <h1 className="g-flex__item c-app__title">Investing for charity</h1>
            <nav className="g-flex__item c-app__navigation">
              <ul className="c-app__navigation-list">
                <li className="c-app__navigation-list-item"><a>Home</a></li>
                <li className="c-app__navigation-list-item"><a>Causes &amp; charities</a></li>
                <li className="c-app__navigation-list-item"><a>How it works</a></li>
                <li className="c-app__navigation-list-item"><a>Sign in / register</a></li>
              </ul>
            </nav>
          </header>
        </div>
        <footer className="c-app__footer">

        </footer>
      </div>
    );
  }
}

export default App;

