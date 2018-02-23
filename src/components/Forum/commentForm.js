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

export default class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = { postId: "", commentBody: "", commentPerson: "" };
  }
  static navigationOptions = {
    header: null
  };

  saveComment() {
    var url = "https://blogpostyi.herokuapp.com/comment/" + this.props.postId;
    axios
      .put(url, {
        postMan: this.state.commentPerson,
        commentBody: this.state.commentBody
      })
      .then(() => this.props.onRefresh())
      .catch(error => {});
  }

  render() {
    return (
      <Form>
        <Item>
          <Input
            placeholder="Your name"
            value={this.state.commentPerson}
            onChangeText={commentPerson => this.setState({ commentPerson })}
          />
        </Item>
        <Item last>
          <Input
            placeholder="Your comment"
            value={this.state.commentBody}
            onChangeText={commentBody => this.setState({ commentBody })}
          />
        </Item>
        <Text>{this.state.saveStatues}</Text>
        <Button
          style={{ alignSelf: "center" }}
          onPress={this.saveComment.bind(this)}
        >
          <Text>Save comment</Text>
        </Button>
      </Form>
    );
  }
}
