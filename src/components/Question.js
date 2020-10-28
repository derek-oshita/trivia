import React from 'react'; 
import Answer from './Answer'; 
import './Component.css'; 

function Question (props) {
    const handleAnswer = props.handleAnswer; 
    const question = props.questionObj.question; 
    return (
        <>
        <section className="question-section">
            <div className="question-box">
                <p>"{question.toUpperCase()}"</p>
            </div>
        </section>
            <Answer handleAnswer={handleAnswer} incorrect={props.questionObj.incorrect} correct={props.questionObj.correct} /> 
        </>
    )
}

export default Question; 