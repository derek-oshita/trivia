import React from 'react'; 
import './Home.css'; 

function Home () {
    return (
        <main className="main-container">
            {/* HEADER */}
                <header>
                    <h1 className="animate__animated animate__pulse">TRIVIA TRAINER!</h1>
                    <p className="animate__animated animate__fadeIn animate__delay-1s subheader">A place to train the mind</p>
                </header>
            {/* GET STARTED BUTTON */}
                <section className="play-button-section">
                    <a href='/categories'>
                        <button className="animate__animated animate__fadeIn animate__delay-2s play-button"><span>Let's play!</span></button>
                    </a>
                </section>
        </main>
    )
}; 

export default Home; 