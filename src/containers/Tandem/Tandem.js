import React, { Component } from 'react'; 
import Questionnaire from '../../components/Questionnaire'; 

import './Tandem.css';  

class Tandem extends Component {
    render() {
        return(
            <main>
                <header>
                    <h1>TANDEM TRIVIA!</h1>
                </header>
                <div className="question-div">
                    <Questionnaire />
                </div>
            </main>
        )
    }
}

export default Tandem; 