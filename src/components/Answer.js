import React from 'react'; 
import './Component.css'; 

function Answer (props) {
    
    const answers = props.answers; 
    const correctAnswer = props.correct; 
    const handleAnswer = props.handleAnswer; 
    const showAnswer = props.showAnswer; 
    const handleNextQuestion = props.handleNextQuestion; 

    return (
        <>
            {answers.map(answer => {
                const color = showAnswer ? 
                answer === correctAnswer ? 'btn-green' : 'btn-red' : 'btn-white'
                return (
                (
                <button className={`${color}`} onClick={() => handleAnswer(answer)}>{answer}</button>
                ))}
            )}
            { showAnswer && (
                <button onClick={handleNextQuestion}>Next Question</button>
            )}
        </>
    )
}

export default Answer; 

/* 
Notes: during the early stages of the app, the correct answer was ALWAYS displayed as the first option. I wasn't sure how I could randomize the
order of the buttons without distinguishing between the correct answer and the wrong answers. Through some digging, I found a really helpful algorithm
that would randomize the order of the buttons so long as both types of answers were combined into a single array. 

Answers kept shuffling around every time we set state, so the answer you selected would end up moving around. 
*/