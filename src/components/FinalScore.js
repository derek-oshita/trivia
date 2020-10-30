import React from 'react'; 
import happy from '../images/trebek_happy.jpg';
import sad from '../images/trebek_sad.png';
import './Component.css'; 

function FinalScore (props) {
    const score = props.score; 
    const highScore = props.highScore; 
    const newGame = props.newGame; 
    return highScore ? (
    // HAPPY ALEX TREBEK
        <section className="final-score-section">
            <div className="final-score-container">
                <p className="final-score animate__animated animate__fadeIn animate__delay-1s subheader">YOUR FINAL SCORE: {score * 10}%</p>
            </div>
            <img className="animate__animated animate__fadeInUp animate__delay-2s trebek" src={happy} />
            <h1 onClick={newGame} className="play-again animate__animated animate__fadeInUp animate__delay-3s">PLAY AGAIN?</h1>
        </section>
    ) : (
    // SAD ALEX TREBEK
        <section className="final-score-section">
            <div className="final-score-container">
                <p className="final-score animate__animated animate__fadeIn animate__delay-1s subheader">YOUR FINAL SCORE: {score * 10}%</p>
            </div>
            <img className="animate__animated animate__fadeInUp animate__delay-2s trebek" src={sad} />
            <h1 onClick={newGame} className="play-again animate__animated animate__fadeInUp animate__delay-3s">PLAY AGAIN?</h1>
        </section>
    )
}; 

export default FinalScore; 

