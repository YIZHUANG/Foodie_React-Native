import React, { Component } from "react";
import { View, Image, BackAndroid } from "react-native";
import firebase from "firebase";
import Text from "../../common/Text";
import SignUpForm from "./signupForm";
import FoodList from "../Product/foodlist";
import { Header, Spinner, Button, Card, CardSection } from "../../common";
import { Form, Item, Input, Label } from "native-base";
import { Actions } from "react-native-router-flux";
import { NavigationActions } from "react-navigation";
import Drawer from "../../Navigation/drawerNav";

class LoginForm extends Component {
  static navigationOptions = {
    title: "Sign in",
    header: null
  };

  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      error: "",
      loggingIn: false,
      signup: false,
      loggedIn: null
    };

    firebase.auth().onAuthStateChanged(user => {
      //firebase api. If a user has logged in.
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });

    BackAndroid.addEventListener("hardwareBackPress", () => {
      Actions.Index({ type: "reset" });
      return true; // go back
    });
  }

  onButtonLogIn() {
    const { Email, Password, error, loggingIn } = this.state;
    this.setState({ error: "", loggingIn: true });
    firebase
      .auth()
      .signInWithEmailAndPassword(Email, Password)
      .then(this.onLoginSuccess.bind(this))
      .catch(this.onLoginFail.bind(this));
  }

  onLoginSuccess() {
    this.setState({
      Email: "",
      Password: "",
      loggingIn: false, // stop the spinner, reset everthing back to the initial state.
      error: ""
    });
  }

  onLoginFail() {
    this.setState({
      error: "Authentication fail!",
      loggingIn: false //stops the spinner, shows error message.
    });
  }

  renderSignInButton() {
    if (this.state.loggingIn) {
      return <Spinner size="small" />;
    }
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={this.onButtonLogIn.bind(this)}>Log in</Button>
      </View>
    );
  }
  render() {
    switch (this.state.loggedIn) { // if the user has logged, redirect the user to home.js
      case true:
        return (
          <Drawer /> // the root route of the drawer is Home.js
        );
      case false:
        return (
          <View style={{ backgroundColor: "#139172", flex: 1 }}>
            <View style={{ paddingBottom: 120 }} />
            <View style={styles.ImageStyle}>
              <Image
                style={{ width: 150, height: 150 }}
                source={require("../../Images/Person.png")}
              />
            </View>
            <Form>
              <Item floatingLabel>
                <Label>user@gmail.com</Label>
                <Input
                  value={this.state.Email}
                  onChangeText={Email => this.setState({ Email })}
                />
              </Item>
              <Item floatingLabel>
                <Label>Password</Label>
                <Input
                  secureTextEntry={true}
                  value={this.state.Password}
                  onChangeText={Password => this.setState({ Password })}
                />
              </Item>
            </Form>
            <Text style={styles.errorStyle}>{this.state.error}</Text>
            {this.renderSignInButton()}
            <View>
              <View style={styles.ViewTextStyle}>
                <Text style={styles.TextStyle}>Forgot your password?</Text>
              </View>
            </View>
          </View>
        );
      default:
        return <Spinner size="large" />;
    }
  }
}

const styles = {
  errorStyle: {
    fontSize: 20,
    alignSelf: "center",
    color: "red"
  },
  ImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    position: "relative",
    paddingBottom: 30
  },
  ViewTextStyle: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingBottom: 40,
    paddingTop: 10,
    paddingRight: 10
  },
  TextStyle: {
    fontSize: 15,
    textDecorationLine: "underline",
    color: "#F9F1EF"
  }
};

export default LoginForm;
