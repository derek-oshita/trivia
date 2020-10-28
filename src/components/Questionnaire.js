import React, { Component } from 'react'; 
import Question from './Question'; 
import Score from './Score'; 
import ShowAnswer from './ShowAnswer'; 

const questions = require('../Tandem_Questions.json'); 

class Questionnaire extends Component {
    state = {
        questions: questions, 
        currentIndex: 0, 
        score: 0, 
        gameEnded: false, 
        showAnswer: false, 
    }; 

    handleAnswer = answer => {
        let newIndex = this.state.currentIndex + 1; 
        this.state.showAnswer = true; 
        // // change question
        // this.setState(answer => {
        //     return {currentIndex: answer.currentIndex + 1}
        // })
        // // change score if answer is correct
        // if (answer === this.state.questions[this.state.currentIndex].correct) {
        //     this.setState(answer => {
        //         return {score: answer.score + 1}
        //     })
        // }
        // // end game
        // if (newIndex >= 10) {
        //     this.state.gameEnded = true; 
        // }
    }; 
    render() {

        const currentIndex = this.state.currentIndex; 
        const questions = this.state.questions; 
        const currentQuestion = questions[currentIndex];
        const score = this.state.score; 
        const gameEnded = this.state.gameEnded; 
        const showAnswer = this.state.showAnswer; 

        return gameEnded ? (
        <p>Your score was...{score}</p>
        ) : (
            <>
            <Score score={score} />
            <Question questionObj={currentQuestion} handleAnswer={this.handleAnswer}/>
            <ShowAnswer showAnswer={showAnswer} />
            </>
        )
    }
}; 

/* 
Notes: tutorial I followed was using a function based component that used hooks to fetch data from a foreign endpoint. I tried to refactor 
to his function based component and struggled as I had trouble (specifically w/ syntax) on how to get the data from a local JSON file. 
I settled for a class based component, however, the handleAnswer method was not toggling through the questions like it was in the tutorial. 
The currentIndex would increment, but state was not updating. Eventually, I spent some time in the React documentation to understand "state" a little better and found that
I can use the event object in my handleAnswer function to increment. 
*/




export default Questionnaire; 