import React from "react";
import { Text, View, Image } from "react-native";

const ImageHeader = ({ Source }) => {
  const { textstyle, smallerText, viewStyle } = styles;

  return (
    <View>
      <Image source={require({ Source })} />
    </View>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: "relative"
  }
};

export { ImageHeader };
