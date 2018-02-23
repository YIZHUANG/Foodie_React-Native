import React, { Component } from "react";
import { Image, BackAndroid } from "react-native";
import Text from "../../common/Text";
import SearchResult from "./receipeResult";
import NavBar from "../../Navigation/navbar";
import {
  Card,
  List,
  Icon,
  Left,
  Container,
  Picker,
  Form,
  Item,
  Content,
  Button,
  Right
} from "native-base";
import Api from "../Util/apiSearch"; // where the search function is nested

export default class Receipe extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      type: "non-vegan", //set initial value due to the default behavior.
      profile: "savory",
      cost: "15",
      searchResult: []
    };
    BackAndroid.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true; // go back
    });
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.renderReceipe = this.renderReceipe.bind(this);
  }

  onTypeChange(value: string) {
    this.setState({
      type: value
    });
  }

  onFlavourChange(value: string) {
    this.setState({
      profile: value
    });
  }

  onCostChange(value: string) {
    this.setState({
      cost: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    Api.search(this.state.type, this.state.profile, this.state.cost).then(
      res => {
        this.setState({
          searchResult: res.data
        });
      }
    );
  };

  renderReceipe = () => {
    const list = this.state.searchResult.map(foods => (
      <List key={foods._id} style={{ paddingTop: 10 }}>
        <SearchResult foods={foods} />
      </List>
    ));
    return list;
  };

  render() {
    var left = (
      <Left>
        <Icon
          name="md-arrow-back"
          onPress={() => this.props.navigation.navigate("Main")}
        />
      </Left>
    );

    return (
      <Container style={{ flex: 1 }}>
        <NavBar left={left} title="Find your receipe" />
        <Content style={{ paddingTop: 10 }}>
          <Form>
            <Picker
              mode="dropdown"
              placeholder="Select type of receipe"
              selectedValue={this.state.type}
              onValueChange={this.onTypeChange.bind(this)}
            >
              <Item label="Main course" value="non-vegan" />
              <Item label="Dessert" value="vegan" />
            </Picker>
            <Picker
              mode="dropdown"
              placeholder="Select flavour profile"
              selectedValue={this.state.profile}
              onValueChange={this.onFlavourChange.bind(this)}
            >
              <Item label="Savory" value="savory" />
              <Item label="Sweet" value="sweet" />
            </Picker>
            <Picker
              mode="dropdown"
              placeholder="Select cost"
              selectedValue={this.state.cost}
              onValueChange={this.onCostChange.bind(this)}
            >
              <Item label="15 euro to 20 euro" value="15" />
              <Item label="5 euro to 15 euro" value="25" />
            </Picker>
            <Button full light onPress={this.handleFormSubmit}>
              <Text>Submit</Text>
            </Button>
          </Form>
          <Card>{this.renderReceipe()}</Card>
        </Content>
      </Container>
    );
  }
}
