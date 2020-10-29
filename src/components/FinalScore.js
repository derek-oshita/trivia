import React from 'react'; 
import happy from '../images/trebek_happy.jpg'
import sad from '../images/trebek_sad.png'

function FinalScore (props) {

    const score = props.score; 
    const highScore = props.highScore; 

    return highScore ? (
    <section>
        <p className="final-score">Your Final Score: {score}</p>
        <img src={happy} />
    </section>
    ) : (
        <section>
        <p className="final-score">Your Final Score: {score}</p>
        <img src={sad} />
        </section>
    )
}; 

export default FinalScore; 