/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import firebase from "firebase";
import RouterFlux from "./src/Navigation/routerFlux";

export default class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      // use your own
    });
  }

  render() {
    return (
      <RouterFlux /> // the root route of routerflux is the index.js in components folder. Where you can choose to sign in or sign up.
    );
  }
}
