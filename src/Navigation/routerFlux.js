import React from "react";
import { BackHandler } from "react-native";
import { Scene, Router, Actions } from "react-native-router-flux";
import LoginForm from "../components/User/loginForm";
import SignUpForm from "../components/User/signupForm";
import Index from "../components/User/index";
import Dashboard from "../components/dashboard";

const RouterFlux = () => {
  componentWillMount = () => {
    BackHandler.addEventListener("hardwareBackPress", () => Actions.pop());
  };

  return (
    <Router>
      <Scene key="root">
        <Scene
          key="Index"
          component={Index}
          titile="Index"
          initial
          hideNavBar
        />
        <Scene key="logIn" component={LoginForm} titile="LogIn" hideNavBar />
        <Scene key="signUp" component={SignUpForm} titile="SignUp" hideNavBar />
        <Scene key="content">
          <Scene key="Home" component={Dashboard} hideNavBar />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterFlux;
