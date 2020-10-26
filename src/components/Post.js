import React from 'react'; 
import Comment from './Comment'; 

function Post(props) {
    let comments = props.comments.map((comment, index) => (
        <Comment message={comment} key={index} />
    ))
    return (
        <div>
            <h1>{props.title}</h1>
            <p>{props.author}</p>
            <p>{props.body}</p>
            <h3>Comments: </h3>
            {comments}
        </div>
    )
}

export default Post; 