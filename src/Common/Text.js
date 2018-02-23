import React, { Component } from "react";
import { Text as TextCustom } from "react-native";

export default class Text extends Component {
  render() {
    return (
      <TextCustom style={[styles.font, this.props.style]} {...this.props}>
        {this.props.children}
      </TextCustom>
    );
  }
}

const styles = {
  font: {
    fontFamily: "Roboto"
  }
};
