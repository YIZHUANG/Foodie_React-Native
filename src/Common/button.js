import React from "react";
import { Text, TouchableOpacity } from "react-native";

const Button = ({ onPress, children }) => {
  const { buttonStyle, textStyle } = styles;
  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text style={textStyle}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  textStyle: {
    alignSelf: "center",
    color: "#F9F1EF",
    fontSize: 16,
    fontWeight: "600",
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonStyle: {
    alignSelf: "stretch",
    backgroundColor: "#14B28B",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#14B28B",
    marginLeft: 50,
    marginRight: 50
  }
};

export { Button };
