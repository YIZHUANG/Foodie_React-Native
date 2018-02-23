import React from "react";
import { TabNavigator } from "react-navigation";
import ShoppingList from "../components/Shopping/shoppingList";
import FoodList from "../components/Product/foodlist";

const TabNav = TabNavigator(
  {
    Tab1: {
      screen: FoodList
    },
    Tab2: {
      screen: ShoppingList
    }
  },
  {
    tabBarPosition: "bottom",
    swipeEnabled: true, //swpiable
    tabBarOptions: {
      activeTintColor: "white",
      activeBackgroundColor: "darkgreen",
      inactiveTintColor: "black",
      inactiveBackgoundColor: "green",
      labelStyle: {
        fontSize: 16,
        color: "white",
        margin: 0,
        padding: 0
      },
      showIcon: true, //allow tab bar icon to be showed.
      style: {
        height: 50,
        backgroundColor: "#4586e0"
      }
    }
  }
);

export default TabNav;
