import React, { Component } from "react";
import { StyleSheet, Text, Image, Linking } from "react-native";
import { NavigationActions } from "react-navigation";
import firebase from "firebase";
import {
  View,
  List,
  Icon,
  Right,
  Left,
  ListItem,
  Body,
  Item,
  Grid,
  Col
} from "native-base";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default class DrawerContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
    this.logOut = this.logOut.bind(this);
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({ name: user.email });
      } else {
        this.setState({ name: "No one" });
      }
    });
  }

  logOut = () => firebase.auth().signOut();

  render() {
    const { navigation } = this.props;
    return (
      <View>
        <View style={{ paddingRight: 15, paddingTop: 40 }}>
          <List>
            <ListItem onPress={() => navigation.navigate("Profile")}>
              <Body>
                <Text style={styles.font}>{this.state.name}</Text>
              </Body>
              <Right>
                <Icon style={{ fontSize: 30 }} name="person" />
              </Right>
            </ListItem>
            <ListItem onPress={() => navigation.navigate("First")}>
              <Body>
                <Text style={styles.font}>Home</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => navigation.navigate("Setting")}>
              <Body>
                <Text style={styles.font}>Setting</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
            <ListItem onPress={() => navigation.navigate("Forum")}>
              <Body>
                <Text style={styles.font}>Forum</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </View>
        <View style={{ height: 1, marginTop: 10 }} />
        <View>
          <List>
            <ListItem onPress={() => navigation.navigate("ContactUs")}>
              <Left>
                <Icon style={{ fontSize: 15 }} name="help" />
              </Left>
              <Body style={{ marginLeft: -135 }}>
                <Text>FAQ</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => navigation.navigate("ContactUs")}>
              <Left>
                <Icon style={{ fontSize: 18 }} name="md-phone-portrait" />
              </Left>
              <Body style={{ marginLeft: -130 }}>
                <Text>Contact us</Text>
              </Body>
            </ListItem>
            <ListItem onPress={() => navigation.navigate("AboutUs")}>
              <Left>
                <Icon
                  style={{ fontSize: 18 }}
                  name="ios-information-circle-outline"
                />
              </Left>
              <Body style={{ marginLeft: -130 }}>
                <Text>About us</Text>
              </Body>
            </ListItem>
          </List>
        </View>
        <View style={{ height: 1, marginTop: 10 }} />
        <View>
          <List>
            <ListItem onPress={this.logOut}>
              <Body>
                <Text style={styles.font}>Log out</Text>
              </Body>
              <Right>
                <Icon name="ios-arrow-forward" />
              </Right>
            </ListItem>
          </List>
        </View>
        <View style={{ paddingLeft: 15, alignItems: "flex-start" }}>
          <Grid style={{ flex: 1 }}>
            <Col>
              <Icon
                style={{ fontSize: 18 }}
                name="logo-facebook"
                onPress={() => Linking.openURL("http://www.facebook.com/")}
              />
            </Col>
          </Grid>
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingTop: 40
  },
  DrawerItem: {
    fontSize: 10,
    borderRadius: 1,
    textAlign: "center",
    backgroundColor: "white",
    overflow: "hidden",
    padding: 15,
    margin: 5
  },
  font: {
    fontFamily: "Roboto"
  }
};
