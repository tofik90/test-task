import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Axios from "axios";
import Comments from "../Comments/Comments";
import "./Post.css";

const Post = (props) => {
  const [post, setPost] = useState({});
  const [postAuthor, setPostAuthor] = useState({});
  const postId = props.match.params.id;
  useEffect(() => {
    Axios("https://jsonplaceholder.typicode.com/posts/" + postId).then(
      (response) => {
        setPost(response.data);
      }
    );
  }, [postId]);

  useEffect(() => {
    if (post.userId) {
      Axios("https://jsonplaceholder.typicode.com/users/" + post.userId).then(
        (response) => {
          setPostAuthor(response.data);
        }
      );
    }
  }, [post]);

  return (
    <div className="content-wrapper">
      <Helmet>
        <title>{props.siteDefTitle + " - " + post.title}</title>
      </Helmet>
      <h3 className="post__title">{post.title}</h3>
      <div className="post__info">
        <span>MARCH 2, 2016</span>
        <span>TRAVEL</span>
      </div>
      <p className="post__body">{post.body}</p>
      <div className="post__author">
        <p>{postAuthor.name}</p>
        <p>{postAuthor.email}</p>
      </div>
      <Comments className="post__comments" postId={postId} />
      <NavLink className="post__all-posts-btn btn" to="/">
        View all posts
      </NavLink>
    </div>
  );
};

export default Post;
