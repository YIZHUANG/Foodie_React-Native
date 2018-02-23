import React, { Component } from "react";
import {
  Container,
  Input,
  Button,
  Form,
  Body,
  Item,
  Header,
  Content,
  Card,
  Thumbnail,
  CardItem,
  Icon,
  Right,
  Left,
  Text
} from "native-base";
import NavBar from "../../Navigation/navbar";
import axios from "axios";

export default class ForumPost extends Component {
  state = { title: "", name: "", imageURL: "", content: "" };

  static navigationOptions = {
    //using my own header
    header: null
  };

  onSubmit = () => {
    axios
      .post("https://blogpostyi.herokuapp.com/api", {
        title: this.state.title,
        author: this.state.name,
        imageURL: this.state.imageURL,
        content: this.state.content
      })
      .then(this.onSucess.bind(this)) //go back after post
      .catch(function(error) {
        alert(error);
      });
  };

  onSucess() {
    this.props.navigation.navigate("Forum");
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
        <Button onPress={this.onSubmit.bind(this)}>
          <Text>Post</Text>
        </Button>
      </Right>
    );
    return (
      <Container>
        <NavBar left={left} right={right} title="New Post" />
        <Content>
          <Form>
            <Item>
              <Icon active name="home" />
              <Input
                placeholder="Post title"
                value={this.state.title}
                onChangeText={title => this.setState({ title })}
              />
            </Item>
            <Item regular>
              <Input
                placeholder="Your name"
                value={this.state.name}
                onChangeText={name => this.setState({ name })}
              />
            </Item>
            <Item regular>
              <Input
                placeholder="ImageUrl"
                value={this.state.imageURL}
                onChangeText={imageURL => this.setState({ imageURL })}
              />
            </Item>
            <Item regular>
              <Input
                placeholder="content"
                value={this.state.content}
                onChangeText={content => this.setState({ content })}
              />
            </Item>
          </Form>
        </Content>
      </Container>
    );
  }
}
