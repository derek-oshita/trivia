import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Home from '../containers/Home/Home'; 
import Categories from '../containers/Categories/Categories'; 
import Tandem from '../containers/Tandem/Tandem'; 

function Routes(props) {
    return (
        <Switch>
            {/* HOME */}
                <Route exact path='/' component={Home} />
            {/* CATEGORIES */}
                <Route path='/categories' component={Categories} />
            {/* TANDEM TRIVIA ROUTE */}
                <Route path='/tandem' component={Tandem} />
            {/* MORE CATEGORIES TO FOLLOW */}
        </Switch>
    )
}

export default Routes; 
