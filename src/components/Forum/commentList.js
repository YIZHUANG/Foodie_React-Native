import React, { Component } from "react";
import {
  ListItem,
  Body,
  Item,
  Header,
  Content,
  Card,
  CardItem,
  Left,
  Text
} from "native-base";
import NavBar from "../../Navigation/navbar";
import axios from "axios";
import Moment from "react-moment";

export default class CommentList extends Component {
  render() {
    return (
      <ListItem>
        <Left>
          <Body>
            <CardItem
              header
              style={{ alignSelf: "center", flexDirection: "column" }}
            >
              <Moment element={Text} format="YYYY-MM-DD HH:mm">
                {this.props.comments.date}
              </Moment>
            </CardItem>
            <Text>Author: {this.props.comments.postMan}</Text>
            <Text>Content: {this.props.comments.commentBody}</Text>
          </Body>
        </Left>
      </ListItem>
    );
  }
}
