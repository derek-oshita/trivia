import React from 'react'; 
import happy from '../images/trebek_happy.jpg';
import sad from '../images/trebek_sad.png';
import './Component.css'; 

function FinalScore (props) {

    const score = props.score; 
    const highScore = props.highScore; 

    return highScore ? (
    <section className="final-score-section">
        <div className="final-score-container">
            <p className="final-score">Nice work! Your Final Score: {score * 10}%</p>
        </div>
        <img className="trebek"src={happy} />
    </section>
    ) : (
    <section className="final-score-section">
        <div className="final-score-container">
            <p className="final-score">You need to study harder: {score * 10}%</p>
        </div>
        <img className="trebek"src={sad} />
    </section>
    )
}; 

export default FinalScore; 