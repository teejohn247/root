import { useState, useEffect } from 'react';
import Login from './Pages/Login/Login';
import Forgotpwd from './Components/Forgotpwd/Forgotpwd';
// import Resetpwd from "./Pages/Resetpwd"
import Section from './Components/Section'
import Signup from "./Pages/Signup";  
import Home from './Pages/Home/Home';   
import NoMatch from './Pages/404Page/404Page';
import {
    Route,
    BrowserRouter as Router,
    Switch,
    Redirect,
  } from "react-router-dom";

const authGuard = (Component) => () => {
  return localStorage.getItem("token") ? (
    <Component />
  ) : (
    <Redirect to="/login" />
  );
};
const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Route path="/forgotpwd">
        <Forgotpwd />
      </Route>
      <Route path="/home" render={authGuard(Home)}></Route>
      <Route exact path="/">
        <Redirect to="/home" />
      </Route>
      <Route path="*">
        <NoMatch />
      </Route>
    </Switch>
  </Router>
);

export default Routes;
