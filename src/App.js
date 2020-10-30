import React, { Component } from 'react'; 
import { Switch } from 'react-router-dom'; 
import Routes from './config/routes'; 
import './App.css'; 

class App extends Component {
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