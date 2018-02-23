import React, { Component } from "react";
import { View, Image, TouchableOpacity, Linking } from "react-native";
import Text from "../../common/Text";
import {
  Header,
  Spinner,
  Input,
  Card,
  CardSection,
  Button
} from "../../common";
import { Actions } from "react-native-router-flux";
import Modal from "react-native-modal";

class Index extends Component {
  static navigationOptions = {
    title: "Sign up",
    header: null
  };

  state = { modalVisible: false };

  setModalVisible = () => this.setState({ modalVisible: true });
  setModalInvisible = () => this.setState({ modalVisible: false });

  render() {
    const space = " ";

    const privacyPolicy = (
      <Text style={{ textDecorationLine: "underline" }}>privacy policy</Text>
    );

    const term = (
      <Text
        onPress={this.setModalVisible}
        style={{ textDecorationLine: "underline" }}
      >
        terms of service
      </Text>
    );
    return (
      <View style={{ backgroundColor: "#139172", flex: 1 }}>
        <View style={{ paddingBottom: 120 }} />
        <View style={styles.ImageStyle}>
          <Image
            style={{ width: 150, height: 150 }}
            source={require("../../Images/beefW.jpg")}
          />
          <Header headerText={"Foodie"} smallHeaderText={"For eaters"} />
        </View>
        <View>
          <Button onPress={() => Actions.logIn()}>Sign in with email</Button>
          <Text style={styles.TextStyle}>Or</Text>
          <Button onPress={() => Actions.signUp()}>Sign up</Button>
          <View style={{ paddingTop: 10, alignSelf: "center" }}>
            <Text style={{ fontSize: 10 }}>
              by continuing you argee to our{space}
              {privacyPolicy}
              {space}and{space}
              {term}
            </Text>
            <Modal isVisible={this.state.modalVisible}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center"
                }}
              >
                <Text style={{ color: "#EEE0E0" }}>
                  i am not responsable for anything
                </Text>
                <Button onPress={this.setModalInvisible}>Close</Button>
              </View>
            </Modal>
          </View>
        </View>
        <View
          style={{
            position: "absolute",
            alignSelf: "center",
            bottom: 0,
            paddingBottom: 40
          }}
        >
          <Text style={{ fontSize: 10 }}>
            <Text>Visit our Youtube channal</Text>
            <Text
              onPress={() => Linking.openURL("https://www.youtube.com/")}
              style={{ textDecorationLine: "underline" }}
            >
              {space}Click here
            </Text>
          </Text>
        </View>
      </View>
    );
  }
}

const styles = {
  ImageStyle: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 30,
    position: "relative"
  },
  TextStyle: {
    alignSelf: "center",
    paddingTop: 10,
    paddingBottom: 10
  }
};

export default Index;
