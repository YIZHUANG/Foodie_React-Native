import React from "react";
import { Text, View } from "react-native";

const Header = props => {
  const { textstyle, smallerText, viewStyle } = styles;

  return (
    <View style={viewStyle}>
      <Text style={textstyle}>{props.headerText}</Text>
      <Text style={smallerText}>{props.smallHeaderText}</Text>
    </View>
  );
};

const styles = {
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative",
    paddingBottom: 20,
    paddingTop: 20
  },
  textstyle: {
    color: "#F9F1EF",
    fontSize: 30
  },
  smallerText: {
    fontSize: 10
  }
};

export { Header };
