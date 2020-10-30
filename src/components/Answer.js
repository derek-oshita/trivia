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
        <div className="answer-parent">
        <section className="answer-container">
            {answers.map(answer => {
                const color = showAnswer ? 
                answer === correctAnswer ? 'btn-green' : 'btn-red' : 'btn'
                return (
                (
                <button className={`${color} answer-btn`} onClick={() => handleAnswer(answer)}>{answer}</button>
                ))}
            )}
        </section>
        </div>
        { showAnswer && (
            <section>
                <button className="next-btn btn animate__fadeIn animate__animated" onClick={handleNextQuestion}>Next Question</button>
            </section>
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

New to grid so styling the buttons got a little tough, especially, when it came to making them responsive for mobile devices. 
*/