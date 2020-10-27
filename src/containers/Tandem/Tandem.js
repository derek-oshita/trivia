import React, { Component } from 'react'; 
import Question from '../../components/Question'; 

class Tandem extends Component {
    render() {
        return(
            <>
            <header>
                <h1>TANDEM TRIVIA!</h1>
            </header>
            <div>
                <Question />
            </div>

            </>
        )
    }
}

export default Tandem; 