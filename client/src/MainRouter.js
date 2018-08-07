import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Home from './components/homepage/homepage'
import Login from './components/login/login';


const App = () => {
  return(
    <div>
      <Router>
        <div>
          {/* <nav /> */}
          <Route exact path="/" component={ Home } />
          <Route exact path="/login" component={ Login } />
   
        </div>
      </Router>
    </div>
  );
}

export default App;
