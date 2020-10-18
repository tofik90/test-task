import React from "react";
import { Route, Switch } from "react-router-dom";
import { Helmet, HelmetProvider  } from "react-helmet-async";
import "./App.css";
import Sidebar from "../Sidebar/Sidebar";
import Home from "../Home/Home";
import About from "../About/About";
import Post from "../Post/Post";

const App = (props) => {
  return (
    <HelmetProvider>
    <div className="app">
      <Helmet>
        <title>{props.siteDefTitle}</title>
      </Helmet>
      <Sidebar />
      <div className="content">
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Home siteDefTitle={props.siteDefTitle} />}
          />
          <Route
            exact
            path="/about"
            render={() => <About siteDefTitle={props.siteDefTitle} />}
          />
          <Route
            path="/posts/:id"
            render={(defProps) => (
              <Post siteDefTitle={props.siteDefTitle} {...defProps} />
            )}
          />
        </Switch>
      </div>
    </div>
    </HelmetProvider>
  );
};

export default App;
