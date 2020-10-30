import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import './Categories.css'; 
import Tandem from '../Tandem/Tandem';

class Categories extends Component {
    render () {
        return (
           <main className="main-container">
            {/* HEADER */}
                <header>
                    <h1 className="pick-category">PICK A CATEGORY!</h1>
                </header>
            {/* TANDEM TRIVIA */}
                <section>
                    <div>
                        <Link to="/tandem">
                                <button className="play-button category-btn"><span>TANDEM TRIVIA</span></button>
                        </Link>
                    </div>
                </section>
           </main>
        )
    }
}; 

export default Categories; 