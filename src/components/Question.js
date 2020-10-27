import React from 'react'; 
import Answer from './Answer'; 

function Question (props) {
    let incorrect = props.questionObj.incorrect.map((incorrectAnswer) => {
        return <Answer incorrect={incorrectAnswer} />
    })
    let correct = props.questionObj.correct; 
    return (
        <>
        <p>{props.questionObj.question}</p>
        <p>{incorrect}</p>
        <p>{correct}</p>
        </>
    )
}

export default Question; 