import React, { Component } from 'react'; 
import './Component.css'; 

function Score (props) {
    const total = 10; 
    return (
    <div className="score-div">
       <p className="subheader">YOUR SCORE: {props.score} / {total}</p> 
    </div>
    )
}

export default Score; 