import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Home from '../containers/Home/Home'; 
import Categories from '../containers/Categories/Categories'; 

function Routes(props) {
    return (
        <Switch>
            {/* HOME */}
                <Route exact path='/' component={Home} />
            {/* CATEGORIES */}
                <Route path='/categories' component={Categories} />
        </Switch>
    )
}

export default Routes; 
