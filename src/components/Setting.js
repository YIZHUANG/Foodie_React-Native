import React, { Component } from "react";
import { BackAndroid } from "react-native";
import Text from "../common/Text";
import { DrawerNavigator } from "react-navigation";
import firebase from "firebase";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import {
  Icon,
  Left,
  Container,
  Header,
  Content,
  ListItem,
  Body,
  Card,
  CardItem,
  Switch,
  Right
} from "native-base";
import NavBar from "../Navigation/navbar";
import { Actions } from "react-native-router-flux";

export default class Setting extends Component {
  static navigationOptions = {
    tabBarLabel: "Setting",
    drawerIcon: ({ tintColor }) => {
      return <MaterialIcons name="settings" />;
    }
  };

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
        <NavBar left={left} title="Settings" />
        <Content>
          <Content style={{ paddingTop: 10 }}>
            <Card>
              <ListItem>
                <Body>
                  <Text>Notifications</Text>
                </Body>
                <Right>
                  <Text>On</Text>
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Do Not disturb</Text>
                </Body>
                <Right>
                  <Switch value={false} />
                </Right>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Chat</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Privacy</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>General</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Account Security</Text>
                </Body>
              </ListItem>
            </Card>
          </Content>
          <Content style={{ paddingTop: 10 }}>
            <Card>
              <ListItem>
                <Body>
                  <Text>About</Text>
                </Body>
              </ListItem>
              <ListItem>
                <Body>
                  <Text>Help&Feedback</Text>
                </Body>
              </ListItem>
            </Card>
          </Content>
          <Content style={{ paddingTop: 10 }}>
            <Card>
              <ListItem>
                <Body>
                  <Text onPress={() => firebase.auth().signOut()}>Log out</Text>
                </Body>
              </ListItem>
            </Card>
          </Content>
        </Content>
      </Container>
    );
  }
}
