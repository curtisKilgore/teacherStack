import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import StudentContainer from "./components/Students/StudentContainer";

import NavBar from "./components/Navbar/NavBar";
import Footer from "./components/Footer/Footer";
import Main from "./components/pages/Main";
import Login from "./components/Login/Login";
import SignUp from "./components/SignUp/SignUp";
import Profile from "./components/Profile/Profile";
import GenericForm from "./components/Form/Form";
import Posts from "./components/Posts/Posts";
import Post from "./components/Post/Post";
import NotFound from "./components/pages/NotFound";
// Redux
import { Provider } from "react-redux";
import store from "./store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <NavBar />
          <Switch>
            <Route exact path={"/"} component={Main}></Route>
            <Route exact path={"/login"} component={Login}></Route>
            <Route exact path={"/signup"} component={SignUp}></Route>
            <Route
              exact
              path={"/students"}
              component={StudentContainer}
            ></Route>
            <Route exact path={"/posts"} component={Posts}></Route>
            <Route exact path={"/post"} component={Post}></Route>
            <Route exact path={"/profile"} component={Profile}></Route>
            <Route exact path={"/form"} component={GenericForm}></Route>
            <Route component={NotFound}></Route>
          </Switch>
          <Footer />
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
