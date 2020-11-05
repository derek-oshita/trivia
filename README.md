## Trivia Trainer!

Link to application: https://tandem-trivia-trainer.herokuapp.com/

Trivia Trainer is my first attempt at a trivia game. It started off as a take-home project for the Tandem SE Apprenticeship and quickly became one of my favorite projects to work on. The application is designed to help users practice their trivia by answering multiple-choice questions (provided by Tandem) and tracking their score. 

I decided to model the game after Jeopardy! as it is my favorite game show and obviously, the best game show ever. 

## Technologies Used

Dependencies: 
- React
- react-router-dom
- Enzyme / Jest (testing) 

Styling: 
- Animate.style CDN 
- Google Fonts CDN 

When reviewing the Tandem project prompt, I immediately thought of a one-page application and decided to go with React. I have grown to love React due to it's component-based encapsulation and performance, but because I'm still new to it, React continues to yield challenges that I wanted to face!

Because Tandem is big on testing, I decided to write a small unit test script with Enzyme to better understand how testing works and its impact on developing in general. As I expand on the application, I will continue to write more test documentation. 

## How to run

Be sure to clone this repo down $cd into the directory. 

### `npm i`

Run 'npm i' from the command line to install all the dependencies. 

### `npm start`

Run 'npm start' in order to run the application. 
The application will load a window to 'localhost:3000'. 

## Assumptions 

- A round of trivia has 10 Questions
- All questions are multiple-choice questions
- Your score does not need to update in real time
- Results can update on form submit, button click, or any interaction you choose
- We will provide you with the trivia data such as the questions, correct and incorrect answers via a JSON file.-

## Acceptance Criteria 

- A user can view questions.
- Questions with their multiple choice options must be displayed one at a time. Questions should not repeat in a round.
- A user can select only 1 answer out of the 4 possible answers.
- The correct answer must be revealed after a user has submitted their answer A user can see the score they received at the end of the round

## Future Development Features

- More categories to choose from
- Question randomizer

## Thanks 

- A special thanks to Florin Pop on Youtube for his exceptional tutorial!


