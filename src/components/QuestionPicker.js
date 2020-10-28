import React, { Component } from 'react'; 
import Question from './Question'; 

const questions = require('../Tandem_Questions.json'); 


// function QuestionPicker() {
//     const questions = require('../Tandem_Questions.json'); 
//     const getRandomQuestion = (arr) => {
//         let length = arr.length; 
//         let index = Math.floor(Math.random() * length); 
//         return arr[index];
//     }
//     const handleAnswer = (answer) => {
//         //blah 
//     }

//     return(
//         <>
//         <p><Question handleAnswer={handleAnswer} questionObj={getRandomQuestion(questions)}/></p>
//         </>
//     )
// }


class QuestionPicker extends Component {

    state = {
        questions: questions, 
        currentIndex: 0, 
    }; 

    render() {
        const currentIndex = this.state.currentIndex; 
        const currentQuestion = this.state.questions; 

        return(
            <>
                <p><Question questionObj={currentQuestion[currentIndex]} /></p>
            </>
        )
    }

}


export default QuestionPicker; 