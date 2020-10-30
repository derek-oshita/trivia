import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import './Categories.css'; 
import Tandem from '../Tandem/Tandem';

class Categories extends Component {
    state = {
        categories: [], 
    }
    render () {
        return (
           <main className="main-container">
                <header>
                    <h1 className="pick-category">PICK A CATEGORY!</h1>
                </header>
                <section>
                    {/* TANDEM */}
                    <div>
                        <Link to="/tandem">
                                {/* <p className="category">TANDEM TRIVIA</p> */}
                                <button className="play-button category-btn"><span>TANDEM TRIVIA</span></button>
                        </Link>
                    </div>
                </section>
           </main>
        )
    }
}; 

export default Categories; 