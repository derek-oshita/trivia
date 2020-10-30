import React, { Component } from 'react'; 
import Questionnaire from '../../components/Questionnaire'; 

import './Tandem.css';  

class Tandem extends Component {
    render() {
        return(
            <main>
                <header className="tandem-header"> 
                    <h1 className="tandem-title">TANDEM TRIVIA!</h1>
                </header>
                <div className="question-div">
                    <Questionnaire />
                </div>
            </main>
        )
    }
}

export default Tandem; 