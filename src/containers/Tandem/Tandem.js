import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import Questionnaire from '../../components/Questionnaire'; 

class Tandem extends Component {
    render() {
        return(
            <main>
            {/* HEADER */}
                <header className="tandem-header"> 
                    <Link to="/">
                        <h1 className="tandem-title">TANDEM TRIVIA!</h1>
                    </Link>
                </header>
            {/* QUESTIONNAIRE */}
                <div className="question-div">
                    <Questionnaire />
                </div>
            </main>
        )
    }
}

export default Tandem; 