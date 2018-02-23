import React, { Component } from "react";
import { View, Image, Linking, TouchableOpacity } from "react-native";
import axios from "axios";
import { Card, CardSection } from "../../common";
import DataService from "../Shopping/data-service";
import { Icon } from "native-base";
import NotificationService, {
  NOTIF_SHOPPINGLIST_CHANGED
} from "../Shopping/notification-service";
import Text from "../../common/Text";
let ns = new NotificationService();
let ds = new DataService();

class FoodDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onShoppingList: ds.itemOnShoppingList()
    };
    this.ButtonClicked = this.ButtonClicked.bind(this);
    this.onShoppingListChanged = this.onShoppingListChanged.bind(this);
  }

  componentDidMount() {
    // for adding products to the shopping cart
    ns.addObserver(
      NOTIF_SHOPPINGLIST_CHANGED,
      this,
      this.onShoppingListChanged
    );
  }

  componentWillUnmount() {
    // for adding products to the shopping cart
    ns.removeObserver(this, NOTIF_SHOPPINGLIST_CHANGED);
  }

  onShoppingListChanged(newShoppingList) {
    this.setState({
      onShoppingList: ds.itemOnShoppingList(this.props.foods)
    }); // for adding products to the shopping cart
  }

  ButtonClicked = () => {
    // for adding products to the shopping cart
    if (this.state.onShoppingList) {
      ds.removeShoppingListItem(this.props.foods);
    } else {
      ds.addShoppingListItem(this.props.foods);
    }
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
            <TouchableOpacity onPress={() => this.ButtonClicked()}>
              <Icon
                style={{ color: "red", fontSize: 18 }}
                name="ios-basket-outline"
              >
                <Text style={{ fontSize: 13 }}>
                  {this.state.onShoppingList
                    ? "Remove from shopping list"
                    : "Add to cart"}
                </Text>
              </Icon>
            </TouchableOpacity>
          </View>
        </CardSection>
        <CardSection>
          <View style={{ flex: 1 }} />
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
    fontSize: 18
  },
  imageStyle: {
    height: 80,
    width: 80
  },
  imageContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 10,
    marginRight: 10
  }
};

export default FoodDetail;
