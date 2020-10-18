import React, { useState, useEffect } from "react";
import Axios from "axios";
import "./Comments.css";

const Comments = (props) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    Axios(
      "https://jsonplaceholder.typicode.com/posts/" + props.postId + "/comments"
    ).then((response) => {
      setComments(response.data);
    });
  }, [props.postId]);

  return (
    <div>
      <h3 className="subtitle">Comments:</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id} className="comments_item">
            <p className="comments__author">{comment.name}</p>
            <p>{comment.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Comments;
