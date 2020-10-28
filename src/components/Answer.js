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

/* 
Notes: during the early stages of the app, the correct answer was ALWAYS displayed as the first option. I wasn't sure how I could randomize the
order of the buttons without distinguishing between the correct answer and the wrong answers. Through some digging, I found a really helpful algorithm
that would randomize the order of the buttons so long as both types of answers were combined into a single array. 
*/