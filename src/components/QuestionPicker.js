import React from 'react'; 
import Question from './Question'; 

function QuestionPicker() {
    const questions = require('../Tandem_Questions.json'); 
    // const questionList = questions.map((question) => {
    // return <p>{question.question}</p>
    // })
    const getRandomNumber = (arr) => {
        let length = arr.length; 
        let result = Math.floor(Math.random() * length); 
        return result; 
    }

    return(
        <>
        <p><Question /></p>
        {/* {console.log(questions.length)} */}
        <h1>{getRandomNumber(questions)}</h1>
        </>
    )
}

export default QuestionPicker; 