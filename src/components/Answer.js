import React from 'react'; 

const Button = ({ props }) => {
    <button>{props}</button>
}

function Answer (props) {
    // const incorrectAnswers = props.incorrect.map((incorrectAnswer) => {
    //     return incorrectAnswer; 
    // })

    const incorrectAnswers = props.incorrect; 
    const correctAnswer = props.correct; 
    const handleAnswer = props.handleAnswer; 
    const shuffleAnswers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5); 

    return (
        <>
            <button onClick={() =>handleAnswer(shuffleAnswers[0])}>{shuffleAnswers[0]}</button>
            <button onClick={() =>handleAnswer(shuffleAnswers[1])}>{shuffleAnswers[1]}</button>
            <button onClick={() =>handleAnswer(shuffleAnswers[2])}>{shuffleAnswers[2]}</button>
            <button onClick={() =>handleAnswer(shuffleAnswers[3])}>{shuffleAnswers[3]}</button>
        </>
    )
}

export default Answer; 