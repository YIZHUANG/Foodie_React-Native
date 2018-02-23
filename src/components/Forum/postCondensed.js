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
  Right,
  Form,
  Input,
  Item,
  ListItem
} from "native-base";
import axios from "axios";
import NavBar from "../../Navigation/navbar";
import Moment from "react-moment";
import Collapsible from "react-native-collapsible";
import CommentList from "./commentList";
import CommentForm from "./commentForm";
import Expand from "react-native-simple-expand";

export default class PostCondensed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      comments: [],
      commentBody: "",
      commentPerson: "",
      saveStatues: false,
      collapsed: true,
      expand: false
    };
    this.renderListOfComment = this.renderListOfComment.bind(this);
    this.onCommentSave = this.onCommentSave.bind(this);
    this._toggleExpanded = this._toggleExpanded.bind(this);
  }

  componentWillMount() {
    this.setState({
      posts: this.props.posts,
      saveStatues: false
    });
  }

  onCommentSave() {
    if (this.state.saveStatues) {
      return <Text>Comment success,refresh the page</Text>;
    }
    return;
  }

  _toggleExpanded = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  onRefresh() {
    this.props.onRefresh();
  }

  renderListOfComment() {
    const list = this.state.posts.comment.map(comments => (
      <CommentList key={comments._id} comments={comments} />
    ));
    return list;
  }

  render() {
    return (
      <Content style={{ flex: 0 }}>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail
                source={{
                  uri:
                    "http://geekycentral.com/wp-content/uploads/2017/09/react-native.png"
                }}
              />
              <Body>
                <Text>{this.props.posts.title}</Text>
                <Text note>{this.props.posts.author}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Body>
              <Image
                source={{ uri: this.props.posts.imageURL }}
                style={{ height: 200, width: 200, flex: 1 }}
              />
              <Text>{this.props.posts.content}</Text>
            </Body>
          </CardItem>
          <CardItem>
            <Left>
              <Button transparent>
                <Icon active name="thumbs-up" />
                <Text>12 Likes</Text>
              </Button>
            </Left>
            <Body>
              <Button transparent onPress={this._toggleExpanded}>
                <Icon active name="chatbubbles" />
                <Text>Comments</Text>
              </Button>
            </Body>
            <Right>
              <Moment element={Text} fromNow>
                {this.props.posts.date}
              </Moment>
            </Right>
          </CardItem>
        </Card>
        <Collapsible collapsed={this.state.collapsed}>
          <Card>{this.renderListOfComment()}</Card>
          <Button
            style={{ alignSelf: "center" }}
            onPress={() => this.setState({ expand: !this.state.expand })}
          >
            <Text>Comment on this post</Text>
            {this.onCommentSave()}
          </Button>
          <Expand value={this.state.expand}>
            <CommentForm
              postId={this.props.posts._id}
              onRefresh={this.onRefresh.bind(this)}
            />
          </Expand>
        </Collapsible>
      </Content>
    );
  }
}
