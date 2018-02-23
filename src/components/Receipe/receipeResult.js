import React, { Component } from "react";
import { Linking } from "react-native";
import Text from "../../common/Text";
import { Thumbnail, ListItem, Body } from "native-base";

export default class SearchResult extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <ListItem>
        <Body>
          <Text>Name : {this.props.foods.name}</Text>
          <Text>Total time : {this.props.foods.totalTime} minutes</Text>
          <Text>Calories : {this.props.foods.calories} cals</Text>
          <Text
            style={{ color: "red", fontSize: 18 }}
            onPress={() => Linking.openURL("http://www.facebook.com/")}
          >
            Click to see method
          </Text>
        </Body>
        <Thumbnail
          square
          size={80}
          source={{ uri: this.props.foods.imageUrl }}
        />
      </ListItem>
    );
  }
}

const styles = {
  headerContent: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  headerText: {
    fontSize: 15
  },
  imageStyle: {
    height: 100,
    width: 100
  },
  imageContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  },
  RealImageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};
