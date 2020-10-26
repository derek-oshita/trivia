import React, { Component } from 'react'; 
import {Route, Link, Switch} from 'react-router-dom'; 
import Routes from './config/routes'; 

class App extends Component {
  render () {
    return (
        <div>
          <Switch>
            {/* <Route path="/about" component={ About } /> */}
            <Routes />
          </Switch>
        </div>
    )
  }
}; 

export default App; 