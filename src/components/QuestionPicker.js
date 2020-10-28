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

    // componentDidMount() {

    // }

    handleAnswer = answer => {
        this.setState(answer => {
            return {currentIndex: answer.currentIndex + 1}
        })
    }; 

    render() {

        const currentIndex = this.state.currentIndex; 
        const questions = this.state.questions; 
        const currentQuestion = questions[currentIndex]

        return(
            <>
                <p><Question questionObj={currentQuestion} handleAnswer={this.handleAnswer}/></p>
            </>
        )
    }

}




export default QuestionPicker; 