import React from 'react'; 

function Answer (props) {
    const incorrectAnswers = props.incorrect; 
    const correctAnswer = props.correct; 
    const handleAnswer = props.handleAnswer; 
    const shuffleAnswers = [correctAnswer, ...incorrectAnswers].sort(() => Math.random() - 0.5); 

    return (
        <>
            {shuffleAnswers.map(answer => (
                <button onClick={() => handleAnswer(answer)}>{answer}</button>
            ))}
        </>
    )
}

export default Answer; 