import React, { Component } from "react";
import Text from "../../common/Text";
import { BackAndroid } from "react-native";
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
  Right,
  Thumbnail
} from "native-base";
import NavBar from "../../Navigation/navbar";

class Profile extends Component {
  static navigationOptions = {
    tabBarLabel: "Profile",
    drawerIcon: ({ tintColor }) => {
      return <MaterialIcons name="accessibility" size={38} />;
    }
  };

  static navigationOptions = {
    header: null
  };

  state = {
    email: "",
    name: "",
    photoUrl:
      "https://www.sonypark360.net/wp-content/uploads/2017/08/profile-pictures.png",
    uid: "",
    providerId: ""
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      //get the current signed in user
      if (user) {
        user.providerData.forEach(profile => {
          this.setState({
            email: profile.email,
            name: profile.displayName,
            uid: profile.uid,
            providerId: profile.providerId
          });
        });
      }
    });
  }

  render() {
    var left = (
      <Left>
        <Icon
          name="md-arrow-back"
          onPress={() => this.props.navigation.navigate("Main")}
        />
      </Left>
    );
    var right = (
      <Right>
        <Text onPress={() => this.props.navigation.navigate("UpdateProfile")}>
          Edit Profile
        </Text>
      </Right>
    );
    return (
      <Container>
        <NavBar left={left} right={right} title="My profile" />
        <Content>
          <Card>
            <ListItem>
              <Body>
                <Text>Profile picture</Text>
              </Body>
              <Thumbnail
                square
                size={80}
                source={{ uri: this.state.photoUrl }}
              />
            </ListItem>
            <ListItem>
              <Body>
                <Text>Name :</Text>
              </Body>
              <Text>{this.state.name}</Text>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Email :</Text>
              </Body>
              <Text>{this.state.email}</Text>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Gender :</Text>
              </Body>
              <Text>Male</Text>
            </ListItem>
            <ListItem>
              <Body>
                <Text>Region :</Text>
              </Body>
              <Text>Finland</Text>
            </ListItem>
          </Card>
        </Content>
      </Container>
    );
  }
}

export default Profile;
