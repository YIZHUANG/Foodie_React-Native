import React, { Component } from "react";
import { View, Image, BackAndroid } from "react-native";
import firebase from "firebase";
import Text from "../../common/Text";
import LoginForm from "./loginForm";
import { Actions } from "react-native-router-flux";
import { Header, Spinner, Button, Card, CardSection } from "../../common";
import { Form, Item, Input, Label } from "native-base";

class SignUpForm extends Component {
  static navigationOptions = {
    title: "Sign up",
    header: null
  };

  constructor() {
    super();
    this.state = {
      Email: "",
      Password: "",
      error: "",
      successMessage: "",
      signningUp: null,
      signinForm: false
    };
    this.signOut = this.signOut.bind(this);
    BackAndroid.addEventListener("hardwareBackPress", () => {
      Actions.Index({ type: "reset" });
      return true; // go back
    });
  }

  signOut = () => {
    // firebase sign out.
    firebase.auth().signOut();
  };

  onButtonSignUp() {
    const { Email, Password, error, signningUp } = this.state;
    this.setState({
      error: "",
      signningUp: true
    });
    firebase
      .auth()
      .createUserWithEmailAndPassword(Email, Password)
      .then(this.onSignUpSuccess.bind(this))
      .catch(this.onSignUpFail.bind(this));
  }

  onSignUpSuccess() {
    // the same as in the signIn page, stops the spinner after sign up success.
    this.setState({
      Email: "",
      Password: "",
      error: "",
      successMessage: "Sign up success",
      signningUp: false // stops the spinner.
    });
    firebase.auth().signOut();
  }

  onSignUpFail() {
    this.setState({
      error:
        "Sign up Fail, check if your email address is correct or it has been used already",
      signningUp: false
    });
  }

  renderButton() {
    if (this.state.signningUp) {
      return <Spinner size="small" />;
    }
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={this.onButtonSignUp.bind(this)}>Sign Up</Button>
      </View>
    );
  }
  render() {
    if ((this.state.signningUp = false)) {
      return (
        //signs out the user after sign up. why?
        <View>{this.signOut()}</View>
      );
    }

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
        <Text>
          {this.state.error}
          {this.state.successMessage}
        </Text>
        {this.renderButton()}
      </View>
    );
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

export default SignUpForm;
