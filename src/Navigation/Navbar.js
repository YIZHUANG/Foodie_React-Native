import React, { Component } from "react";
import { Header, Body, Title, Left, Right, Icon } from "native-base";
import { View } from "react-native";

export default class Navbar extends Component {
  render() {
    return (
      <View>
        <Header
          style={{ backgroundColor: Colors.navbarBackgroundColor }}
          backgroundColor={Colors.navbarBackgroundColor}
          androidStatusBarColor={Colors.statusBarColor}
          noShadow={true}
        >
          {this.props.left ? this.props.left : <Left style={{ flex: 1 }} />}
          <Body style={styles.body}>
            <Title style={styles.title}>{this.props.title}</Title>
          </Body>
          {this.props.right ? this.props.right : <Right style={{ flex: 1 }} />}
        </Header>
      </View>
    );
  }
}

const Colors = {
  navbarBackgroundColor: "#2c3e50",
  statusBarColor: "#233240"
};

const styles = {
  body: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontFamily: "Roboto",
    fontWeight: "100"
  }
};
