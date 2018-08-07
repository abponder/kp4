import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './Nav.css';



class Nav extends Component {
  render() {
    return (
        <nav styleName="nav-container">
            <div styleName="navbar-custom">
                <div styleName="navbar-nav">
                    <a styleName="navbar-nava" href = "/">Home</a> 
                </div>
                <div styleName="navbar-nav">
                    <a styleName="navbar-nava"  href = "/locations">Location</a>
                </div>
                <div styleName="navbar-nav">
                    <a styleName="navbar-nava" href = "/audit">Audits</a>
                </div>
                <div styleName="navbar-nav">
                    <a styleName="navbar-nava" href = "/login">Login</a>
                </div>
            </div>
        </nav>
    );
  }
}

export default CssModules(Nav, styles);