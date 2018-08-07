import React, { Component } from 'react';
import logo from './components/images/logo/KP2-white.png';
import CssModules from 'react-css-modules';
import styles from './App.css';
import MainRouter from './MainRouter'
import Nav from './components/nav-bar/nav.js';
// import Login from './components/homepage/homepage';
import {BrowserRouter} from 'react-router-dom'



class App extends Component {
  render() {
    return (
      <div styleName="App">
        <header styleName="App-header">
          <img src={logo} styleName="App-logo" alt="logo" />
          <h1 styleName="App-title">Billing Audit System</h1>
        </header>
        <Nav styleName="App-nav">{  }</Nav>
        {/* <Login> { }</Login> */}
        <BrowserRouter>
          <MainRouter/>
        </BrowserRouter>
      </div>
    );
  }
}

export default CssModules(App, styles);
