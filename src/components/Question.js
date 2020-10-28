import React from 'react'; 
import Answer from './Answer'; 
import './Component.css'; 

function Question (props) {
    const handleAnswer = props.handleAnswer; 
    const question = props.questionObj.question; 
    const showAnswer = props.showAnswer; 
    return (
        <>
        <section className="question-section">
            <div className="question-box">
                <p>"{question.toUpperCase()}"</p>
            </div>
        </section>
            <Answer handleAnswer={handleAnswer} incorrect={props.questionObj.incorrect} correct={props.questionObj.correct} showAnswer={showAnswer}/> 
        </>
    )
}

export default Question; 