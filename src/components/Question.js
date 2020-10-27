import React from 'react'; 

let questions = require('../Tandem_Questions.json'); 

function Question (props) {
    return (
        <>
        <p>Question Component</p>
        {console.log(questions)}
        </>
    )
}

export default Question; 