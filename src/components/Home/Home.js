import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import Axios from "axios";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = (props) => {
  const [posts, setPosts] = useState([]);
  let [postsLimit, setPostsLimit] = useState(7);

  useEffect(
    (limit = postsLimit) => {
      Axios("https://jsonplaceholder.typicode.com/posts?_limit=" + limit).then(
        (response) => {
          setPosts(response.data);
        }
      );
    },
    [postsLimit]
  );

  let morePosts = () => setPostsLimit((postsLimit += 7));

  return (
    <div>
      <Helmet>
        <title>{props.siteDefTitle + " - Home"}</title>
      </Helmet>
      <div className="content-wrapper">
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <article className="home">
                <h3 className="home__title">{post.title}</h3>
                <div className="home__info">
                  <span>MARCH 2, 2016</span>
                  <span>TRAVEL</span>
                </div>
                <p className="home__body">{post.body}</p>
                <NavLink className="home__continue" to={"/posts/" + post.id}>
                  Continue reading
                </NavLink>
              </article>
            </li>
          ))}
        </ul>
        <button className="home__more-btn btn" onClick={morePosts}>
          More posts
        </button>
      </div>
    </div>
  );
};

export default Home;
