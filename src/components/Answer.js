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
        {/* ANSWER BUTTONS */}
            <div className="answer-parent">
                <section className="answer-container">
                    {answers.map(answer => {
                        const color = showAnswer ? 
                        answer === correctAnswer ? 'btn-green' : 'btn-red' : 'btn'
                        return (
                        (
                        <button className={`${color} answer-btn `} onClick={() => handleAnswer(answer)}>{answer}</button>
                        ))}
                    )}
                </section>
            </div>
        {/* NEXT QUESTION */}
            { showAnswer && (
                <section>
                    <button className="next-btn btn animate__fadeIn animate__animated" onClick={handleNextQuestion}>Next Question</button>
                </section>
            )}
        </>
    )
}

export default Answer; 
