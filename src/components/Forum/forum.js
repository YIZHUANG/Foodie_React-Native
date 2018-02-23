import React, { Component } from "react";
import { Image } from "react-native";
import {
  Container,
  Body,
  Button,
  Header,
  Content,
  Card,
  Thumbnail,
  CardItem,
  Left,
  Text,
  Icon,
  Right
} from "native-base";
import NavBar from "../../Navigation/navbar";
import axios from "axios";
import PostCondensed from "./postCondensed";

export default class Forum extends Component {
  static navigationOptions = {
    //using my own header
    header: null
  };
  state = {
    post: []
  };

  constructor() {
    super();
    this.renderPosts = this.renderPosts.bind(this);
  }

  componentDidMount() {
    axios
      .get("https://blogpostyi.herokuapp.com/listOfPosts")
      .then(response => this.setState({ post: response.data }));
  }

  renderPosts = () => {
    const list = this.state.post.map(posts => (
      <PostCondensed
        onRefresh={() => this.props.navigation.navigate("Forum")}
        posts={posts}
        key={posts._id}
      />
    ));
    return list;
  };

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
        <Text onPress={() => this.props.navigation.navigate("ForumNew")}>
          Post new threads
        </Text>
      </Right>
    );
    return (
      <Container>
        <NavBar left={left} right={right} title="Forum" />
        <Content>{this.renderPosts()}</Content>
      </Container>
    );
  }
}
