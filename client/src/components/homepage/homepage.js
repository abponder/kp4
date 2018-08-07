import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './Homepage.css';
import formlogo from './../images/logo/KP2.png';



class Home extends Component {
 
  render() {
    return (
      <div styleName="form-container">
        <div styleName="field-area">
          <img src={formlogo} styleName="form-logo" alt="logo" />
        </div>
        <div>
          <p>Please signin <a href="/login">click here</a></p>
        </div>
       
      </div>
    );
  }
}

export default CssModules(Home, styles);