import React, { Component } from "react";
import { View, Image, BackAndroid } from "react-native";
import { DrawerNavigator } from "react-navigation";
import { Spinner, Input, Button } from "../common";
import firebase from "firebase";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  Icon,
  Left,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body
} from "native-base";
import NavBar from "../Navigation/navbar";
import { Actions } from "react-native-router-flux";
import Text from "../common/Text";

export default class ContactUs extends Component {
  constructor(props) {
    super(props);
    BackAndroid.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true; // go back
    });
  }
  render() {
    var left = (
      <Left>
        <Icon
          name="md-arrow-back"
          onPress={() => this.props.navigation.goBack()}
        />
      </Left>
    );
    return (
      <Container>
        <NavBar left={left} title="Contact Us" />
        <Content>
          <Card>
            <CardItem
              header
              style={{ alignSelf: "center", flexDirection: "column" }}
            >
              <Text>If you have any questions or feedback, contact us</Text>
              <Image
                source={require("../Images/phone.png")}
                style={{ paddingTop: 30, width: 150, height: 150 }}
              />
              <Text style={{ paddingTop: 20 }}>123456</Text>
            </CardItem>
            <CardItem
              header
              style={{ alignSelf: "center", flexDirection: "column" }}
            >
              <Text>Or email us</Text>
              <Image
                source={require("../Images/Email.jpg")}
                style={{ paddingTop: 30, width: 150, height: 150 }}
              />
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
