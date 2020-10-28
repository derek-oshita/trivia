import React from 'react'; 
import Answer from './Answer'; 

function Question (props) {
    // let incorrect = props.questionObj.incorrect.map((incorrectAnswer) => {
    //     return <Answer incorrect={incorrectAnswer} />
    // })
    // let correct = props.questionObj.correct;
    const handleAnswer = props.handleAnswer; 
    return (
        <>
        <div className="question-box">
            <p>{props.questionObj.question}</p>
        </div>
        {/* <div className="answer-box">
            {incorrect}
            <button>{correct}</button>
        </div> */}
        {/* {console.log('Correct - ', props.questionObj.correct)} */}
        <div>
            <Answer handleAnswer={handleAnswer} incorrect={props.questionObj.incorrect} correct={props.questionObj.correct} /> 
        </div>
        </>
    )
}

export default Question; 