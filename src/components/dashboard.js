import React, { Component } from "react";
import {
  ScrollView,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from "react-native";
import { DrawerNavigator } from "react-navigation";
import { BackAndroid } from "react-native";
import { Header, Spinner, Input, Button, Card, CardSection } from "../common";
import {
  Container,
  Content,
  Left,
  Right,
  Icon,
  CardItem,
  cardBody
} from "native-base";
import axios from "axios";
import Text from "../common/Text";
import NavBar from "../Navigation/navbar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

class Dashboard extends Component {
  static navigationOptions = {
    header: null
  };

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    BackAndroid.addEventListener("hardwareBackPress", this.handleBackButton);
  }
  //disable back button
  componentWillUnmount() {
    BackAndroid.removeEventListener("hardwareBackPress", this.handleBackButton);
  }

  handleBackButton() {
    return true;
  }

  render() {
    var left = (
      <Left style={{ flex: 1 }}>
        <Icon
          name="ios-menu-outline"
          size={5}
          onPress={() => this.props.navigation.navigate("DrawerOpen")}
        />
      </Left>
    );
    var right = (
      <Right style={{ flex: 1 }}>
        <Icon
          name="ios-search-outline"
          onPress={() => this.props.navigation.navigate("Search")}
          size={5}
        />
      </Right>
    );
    return (
      <Container>
        <Content>
          <View style={{ flex: 1 }}>
            <NavBar left={left} right={right} title="Shopping" />
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate("TabNav")}
              title="Go to FoodList"
            >
              <View>
                <Image
                  style={styles.image}
                  source={{ uri:"https://draxe.com/wp-content/uploads/2015/05/bigstock-Beef-Steak-On-Cutting-Board-81723602.jpg"}} />
                <View style={styles.overlay} />
                <View style={styles.border} />
                <View style={styles.text}>
                  <Text style={styles.title}>Food</Text>
                  <Text style={styles.subtitle}>Shop Now</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate("Receipe")} >
              <View>
                <Image
                  style={styles.image}
                  source={{ uri:"https://cdn.pixabay.com/photo/2014/12/21/23/28/recipe-575434_640.png"}} />
                <View style={styles.overlay} />
                <View style={styles.border} />
                <View style={styles.text}>
                  <Text style={styles.title}>Looking for receipe?</Text>
                  <Text style={styles.subtitle}>Go check out now!</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.9}
              onPress={() => this.props.navigation.navigate("store")}
            >
              <View>
                <Image
                  style={styles.image}
                  source={{ uri:"https://www.salzburg.info/website/var/tmp/image-thumbnails/30000/34839/thumb__teaser--topic/grunmarkt-in-salzburg_4586.jpeg" }} />
                <View style={styles.overlay} />
                <View style={styles.border} />
                <View style={styles.text}>
                  <Text style={styles.title}>Store locate</Text>
                  <Text style={styles.subtitle}>Find markets nearby</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </Content>
      </Container>
    );
  }
}

const styles = {
  text: {
    width: Dimensions.get("window").width,
    height: 200,
    position: "absolute",
    alignItems: "center",
    justifyContent: "center"
  },
  title: {
    textAlign: "center",
    color: "#fdfdfd",
    fontSize: 32
  },
  subtitle: {
    textAlign: "center",
    color: "#fdfdfd",
    fontSize: 16,
    fontWeight: "100",
    fontStyle: "italic"
  },
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(30, 42, 54, 0.4)"
  },
  border: {
    position: "absolute",
    top: 10,
    left: 10,
    right: 10,
    bottom: 10,
    borderWidth: 1,
    borderColor: "rgba(253, 253, 253, 0.2)"
  },
  image: {
    height: 200,
    flex: 1
  }
};

export default Dashboard;
