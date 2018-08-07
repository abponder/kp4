import React, { Component } from 'react';
import CssModules from 'react-css-modules';
import styles from './Login.css';
import formlogo from './../images/logo/KP2.png';



class Login extends Component {
  //set the initial values for username and password
  state = {
    username: "",
    password: ""
  };
  //check the user name and password
  handleFormSubmit = event => {
    event.preventDefault();
    alert(`Username: ${this.state.username}\nPassword: ${this.state.password}`);
    this.setState({ username: "", password: "" });
  };
  render() {
    return (
      <div styleName="form-container">
        <div styleName="field-area">
          <img src={formlogo} styleName="form-logo" alt="logo" />
        </div>
        <form>
          <div styleName="field-area">
            <span styleName="field-title">User Name: {this.state.username}</span>  
            <input
            type="text"
            placeholder="Username"
            name="username"
            value={this.state.username}
            onChange={this.handleInputChange}
          />          
          </div>
          <div styleName="field-area">
            <span styleName="field-title">Password: {this.state.password}</span>
            <input
              type="password"
              placeholder="Password"
              name="password"
              value={this.state.password}
              onChange={this.handleInputChange}
            />
          </div>
          <div styleName="div-btn">
            <button styleName="btn1" onClick={this.handleFormSubmit}>Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default CssModules(Login, styles);