import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Hello from './App.js'; 
import Post from './components/Post'; 

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

const post = {
  'title': 'Mila is the princess', 
  'author': 'Derek', 
  'body': 'She\'s the sweetest lady!', 
  'comments': [
    'Yup', 
    'Yesss', 
    'JASSSSSS', 
  ]
}

ReactDOM.render(
  <Post title={post.title} author={post.author} body={post.body} comments={post.comments}/>, 
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
