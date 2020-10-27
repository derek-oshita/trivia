import React from 'react'; 
import Answer from './Answer'; 

function Question (props) {
    let incorrect = props.questionObj.incorrect.map((incorrectAnswer) => {
        return <Answer incorrect={incorrectAnswer} />
    })
    return (
        <>
        <p>{props.questionObj.question}</p>
        <p>{incorrect}</p>
        </>
    )
}

export default Question; 