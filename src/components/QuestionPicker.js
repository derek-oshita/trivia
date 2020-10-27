import React from 'react'; 
import Question from './Question'; 


function QuestionPicker() {
    const questions = require('../Tandem_Questions.json'); 
    const getRandomQuestion = (arr) => {
        let length = arr.length; 
        let index = Math.floor(Math.random() * length); 
        return arr[index];
    }
    return(
        <>
        <p><Question questionObj={getRandomQuestion(questions)}/></p>
        </>
    )
}

export default QuestionPicker; 