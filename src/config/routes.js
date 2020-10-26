import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Home from '../containers/Home'; 

function Routes(props) {
    return (
        <Switch>
            {/* HOME */}
                <Route exact path='/' component={Home} />
        </Switch>
    )
}

export default Routes; 
