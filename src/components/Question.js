import React from 'react'; 

function Question (props) {
    const questions = require('../Tandem_Questions.json'); 
    const questionList = questions.map((question) => {
    return <p>{question.question}</p>
    })
    return (
        <>
        <p>Question Component</p>
        </>
    )
}

export default Question; 