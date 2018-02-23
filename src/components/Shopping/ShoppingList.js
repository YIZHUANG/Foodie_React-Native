import React, { Component } from "react";
import { ScrollView, View } from "react-native";
import Text from "../../common/Text";
import { Icon, Right, Button } from "native-base";
import ProductCondensed from "./productCondensed";
import DataService from "./data-service";
import NotificationService, {
  NOTIF_SHOPPINGLIST_CHANGED
} from "./notification-service";
import NavBar from "../../Navigation/navbar";
let ns = new NotificationService();

export default class ShoppingList extends Component {
  static navigationOptions = {
    tabBarLabel: "Cart",
    tabBarIcon: () => {
      return <Icon name="md-cart" size={5} color={"white"} />;
    },
    header: null
  };

  constructor(props) {
    super(props);
    this.state = {
      shoppingList: []
    };
    this.createShoppingList = this.createShoppingList.bind(this);
    this.onShoppingListChanged = this.onShoppingListChanged.bind(this);
  }

  componentDidMount() {
    ns.addObserver(
      NOTIF_SHOPPINGLIST_CHANGED,
      this,
      this.onShoppingListChanged
    );
  }

  componentWillUnmount() {
    ns.removeObserver(this, NOTIF_SHOPPINGLIST_CHANGED);
  }

  onShoppingListChanged(newShoppingList) {
    //if the shoppinglist has items added.
    this.setState({
      shoppingList: newShoppingList
    });
  }

  createShoppingList = () => {
    //adding products to the shopping list
    const list = this.state.shoppingList.map(foods => (
      <ProductCondensed foods={foods} key={foods.title} />
    ));
    return list;
  };

  render() {
    var right = (
      <Right>
        <Button onPress={() => this.props.navigation.navigate("ForumPost")}>
          <Text>Check out</Text>
        </Button>
      </Right>
    );
    return (
      <View>
        <View>
          <NavBar title="Shopping cart" right={right} />
          <ScrollView>{this.createShoppingList()}</ScrollView>
        </View>
      </View>
    );
  }
}
