import React, { Component } from 'react'; 
import QuestionPicker from '../../components/QuestionPicker'; 

import './Tandem.css';  

class Tandem extends Component {
    render() {
        return(
            <>
            <header>
                <h1>TANDEM TRIVIA!</h1>
            </header>
            <div className="question-div">
                <QuestionPicker />
            </div>
            </>
        )
    }
}

export default Tandem; 