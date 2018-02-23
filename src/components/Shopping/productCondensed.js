import React, { Component } from "react";
import { View, Image, Linking } from "react-native";
import Text from "../../common/Text";
import DataService from "./data-service";
import { Card, CardSection } from "../../common";
let ds = new DataService();

class ProductCondensed extends Component {
  constructor(props) {
    super(props);
    this.removeProduct = this.removeProduct.bind(this);
  }

  removeProduct = () => {
    ds.removeShoppingListItem(this.props.foods);
  };

  render() {
    return (
      <Card>
        <CardSection>
          <View style={styles.imageContainerStyle}>
            <Image
              style={styles.imageStyle}
              source={{ uri: this.props.foods.thumbnail_image }}
            />
          </View>
          <View style={styles.headerContent}>
            <Text style={styles.headerText}>{this.props.foods.title}</Text>
            <Text>{this.props.foods.price} euro</Text>
            <Text>{this.props.foods.market}</Text>
            <Text
              style={{ color: "red", fontSize: 13 }}
              onPress={() => this.removeProduct()}
            >
              Remove
            </Text>
          </View>
        </CardSection>
      </Card>
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
  }
};

export default ProductCondensed;
