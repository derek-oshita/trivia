import React, { Component } from 'react'; 
import Question from './Question'; 
import Score from './Score'; 
import FinalScore from './FinalScore'; 

// DATA VARIABLES 
const questions = require('../Tandem_Questions.json'); 
const roundOne = questions.map((question) => ({
    ...question, 
    "answers": [
        question.correct, 
        ...question.incorrect
    ].sort(() => Math.random() - 0.5 )
}))
const roundTwo = roundOne.slice(10, 20); 

// QUESTIONNAIRE 
class Questionnaire extends Component {
    state = {
        questions: roundOne, 
        currentIndex: 0, 
        score: 0, 
        gameEnded: false, 
        showAnswer: false, 
        highScore: false, 
        newGame: false, 
    }; 
    // HANDLE ANSWER
    handleAnswer = answer => {
        const newIndex = this.state.currentIndex + 1; 
        const score = this.state.score; 
        // SHOW ANSWER 
        if (!this.state.showAnswer) {
            this.setState({
                showAnswer: true, 
            })
            // CORRECT ANSWER
            if (answer === this.state.questions[this.state.currentIndex].correct) {
                this.setState(answer => {
                    return {score: answer.score + 1}
                })
                // HIGH SCORE 
                if (score > 5) {
                    this.setState({
                        highScore: true, 
                    })
                }
            }
        }
    }; 
    // HANDLE NEXT QUESTION
    handleNextQuestion = () => {
        const newIndex = this.state.currentIndex + 1; 
        // SHOW ANSWER 
        this.setState({
            showAnswer: false, 
        })
        // CHANGE QUESTION
        this.setState(answer => {
            return {currentIndex: answer.currentIndex + 1}
        })
        // END GAME 
        if (newIndex >= 10) {
            this.state.gameEnded = true; 
        }
    };
    // NEW GAME 
    newGame = () => {
        this.setState({
            questions: roundTwo, 
            currentIndex: 0, 
            score: 0, 
            gameEnded: false, 
            showAnswer: false, 
            highScore: false, 
            newGame: true, 
        })
    }; 
    
    render() {

        const currentIndex = this.state.currentIndex; 
        const questions = this.state.questions; 
        const currentQuestion = questions[currentIndex];
        const score = this.state.score; 
        const gameEnded = this.state.gameEnded; 
        const showAnswer = this.state.showAnswer; 
        const handleNextQuestion = this.handleNextQuestion; 
        const highScore = this.state.highScore; 
        const newGame = this.newGame; 

        return gameEnded ? (
            <FinalScore newGame={newGame} score={score} highScore={highScore}/>
        ) : (
            <>
            {/* SCORE */}
                <Score score={score} />
            {/* QUESTION */}
                <Question questionObj={currentQuestion} handleAnswer={this.handleAnswer} showAnswer={showAnswer} handleNextQuestion={handleNextQuestion} newGame={newGame}/>
            </>
        )
    }
}; 

export default Questionnaire; 
