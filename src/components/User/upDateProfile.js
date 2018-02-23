import React, { Component } from "react";
import Text from "../../common/Text";
import firebase from "firebase";
import NavBar from "../../Navigation/navbar";
import {
  Container,
  Right,
  Icon,
  Left,
  Content,
  Input,
  Form,
  Item
} from "native-base";

class UpdateProfile extends Component {
  state = {
    name: ""
  };

  static navigationOptions = {
    header: null
  };

  updateUserProfile = () => {
    var user = firebase.auth().currentUser;
    this.setState({
      updateStatus: true
    });
    user
      .updateProfile({
        displayName: this.state.name
      })
      .then(this.onSucess.bind(this))
      .catch(error => {
        console.log(error);
      });
  };

  onSucess() {
    this.props.navigation.navigate("Main");
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
    var right = (
      <Right>
        <Text onPress={this.updateUserProfile.bind(this)}>Save</Text>
      </Right>
    );
    return (
      <Container>
        <NavBar left={left} right={right} title="Edit profile" />
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Name"
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </Item>
          </Form>
          <Text>{this.state.successMess}</Text>
        </Content>
      </Container>
    );
  }
}

export default UpdateProfile;
