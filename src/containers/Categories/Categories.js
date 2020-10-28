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
           <>
            <header>
                <h2>PICK A CATEGORY!</h2>
            </header>
            <section>
                {/* TANDEM */}
                <div>
                    <Link to="/tandem">
                            <p className="category">TANDEM TRIVIA</p>
                        </Link>
                </div>
                {/* COMPUTER SCIENCE */}
                <div>
                        <p className="category">COMPUTER SCIENCE</p>
                </div>
            </section>
           </>
        )
    }
}; 

export default Categories; 