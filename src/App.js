import React, { Component } from 'react'; 
import {Route, Link, Switch} from 'react-router-dom'; 
import Routes from './config/routes'; 
import './App.css'; 

class App extends Component {
  // state = {
  //   answers: [], 
  //   questions: [], 
  // }
  
  render () {
    return (
        <div>
          <Switch>
            <Routes />
          </Switch>
        </div>
    )
  }
}; 

export default App; 