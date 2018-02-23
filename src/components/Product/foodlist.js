import React, { Component } from "react";
import { ScrollView, Image, BackAndroid } from "react-native";
import axios from "axios";
import Text from "../../common/Text";
import firebase from "firebase";
import FoodDetail from "./foodDetail";
import { View, Left, Right, Icon } from "native-base";
import NavBar from "../../Navigation/navbar";

class FoodList extends Component {
  static navigationOptions = {
    tabBarLabel: "Product",
    tabBarIcon: () => {
      return <Icon name="md-home" size={5} color={"white"} />;
    },
    header: null //hide header and use my own
  };

  constructor(props) {
    super(props);
    this.state = {
      foodlist: []
    };
    this.renderFoodList = this.renderFoodList.bind(this);
  }

  componentWillMount() {
    axios
      .get(
        "https://api.mlab.com/api/1/databases/foodproduct/collections/FoodProduct?apiKey=5cj3F0nQw4ngucb3XjmYCeWpnnxqshoF"
      )
      .then(response =>
        this.setState({
          foodlist: response.data
        })
      );
  }

  componentDidMount() {
    //handle back button.
    BackAndroid.addEventListener("hardwareBackPress", this.handleBackButton);
  }

  componentWillUnmount() {
    //handle back button.
    BackAndroid.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  renderFoodList = () => {
    const list = this.state.foodlist.map(foods => (
      <View key={foods.title}>
        <FoodDetail foods={foods} />
      </View>
    ));
    return list;
  };

  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Icon
          name="arrow-back"
          size={5}
          onPress={() => this.props.navigation.navigate("Main")}
        />
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Icon name="ios-search-outline" size={5} />
      </Right>
    );
    return (
      <View>
        <NavBar left={left} right={right} title="Shopping" />
        <ScrollView>{this.renderFoodList()}</ScrollView>
      </View>
    );
  }
}

export default FoodList;
