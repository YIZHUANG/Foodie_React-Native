import React, { Component } from "react";
import {
  Container,
  Header,
  Item,
  Input,
  Icon,
  Button,
  Text
} from "native-base";

export default class Search extends Component {
  static navigationOptions = {
    header: null
  };

  render() {
    return (
      <Container>
        <Header searchBar rounded>
          <Item>
            <Icon
              name="ios-search"
              onPress={() => this.props.navigation.goBack()}
            />
            <Input placeholder="Search" />
          </Item>
          <Button transparent>
            <Text>Search</Text>
          </Button>
        </Header>
      </Container>
    );
  }
}
