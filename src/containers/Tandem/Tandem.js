import React, { Component } from 'react'; 
import Question from '../../components/Question';
import './Tandem.css';  

class Tandem extends Component {
    render() {
        return(
            <>
            <header>
                <h1>TANDEM TRIVIA!</h1>
            </header>
            <div className="question-div">
                <Question />
            </div>
            </>
        )
    }
}

export default Tandem; 