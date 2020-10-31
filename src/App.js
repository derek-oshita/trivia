import React, { Component } from 'react'; 
import { Switch, BrowserRouter } from 'react-router-dom'; 
import Routes from './config/routes'; 
import './App.css'; 

class App extends Component {
  render () {
    return (
        <div>
          <BrowserRouter>
            <Switch>
              <Routes />
            </Switch>
          </BrowserRouter>
        </div>
    )
  }
}; 

export default App; 

/* 

Invariant failed: You should not use <Switch> outside a <Router>

TestingLibraryElementError: Unable to find an element with the text: /learn react/i. This could be because the text is broken up by multiple elements. In this case, you can provide a function for your text matcher to make your matcher more flexible.

renders learn react link


*/