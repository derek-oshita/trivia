import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './Home.css'; 

function Home () {
    return (
        <>
            {/* HEADER */}
                <header>
                    <h1>Trivia Trainer</h1>
                    <p>A place to train the mind!</p>
                </header>
            {/* GET STARTED BUTTON */}
                <section>
                    <Link to='/categories'>
                    <button>Let's play!</button>
                    </Link>
                </section>
        </>
    )
}; 

export default Home; 