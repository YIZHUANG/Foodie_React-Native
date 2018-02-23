import React, { Component } from "react";
import { View, Image, BackAndroid } from "react-native";
import { DrawerNavigator } from "react-navigation";
import {
  Icon,
  Left,
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Body
} from "native-base";
import NavBar from "../Navigation/navbar";
import Text from "../common/Text";

export default class AboutUs extends Component {
  constructor(props) {
    super(props);
    BackAndroid.addEventListener("hardwareBackPress", () => {
      this.props.navigation.goBack();
      return true; // go back
    });
  }
  render() {
    var left = (
      <Left>
        <Icon
          name="md-arrow-back"
          onPress={() => this.props.navigation.goBack()}
        />
      </Left>
    );
    return (
      <View style={{ flex: 1 }}>
        <NavBar left={left} title="About Us" />
        <Container>
          <Content>
            <Card>
              <CardItem
                header
                style={{ alignSelf: "center", flexDirection: "column" }}
              >
                <Text>Foodie</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <Text>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean commodo ligula eget dolor. Aenean massa. Cum sociis
                    natoque penatibus et magnis dis parturient montes, nascetur
                    ridiculus mus. Donec quam felis, ultricies nec, pellentesque
                    eu, pretium quis, sem. Nulla consequat massa quis enim.
                    Donec pede justo, fringilla vel, aliquet nec, vulputate
                    eget, arcu. In enim justo, rhoncus ut, imperdiet a,
                    venenatis vitae, justo. Nullam dictum felis eu pede mollis
                    pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
                    semper nisi. Aenean vulputate eleifend tellus. Aenean leo
                    ligula, porttitor eu, consequat vitae, eleifend ac, enim.
                    Aliquam lorem ante, dapibus in, viverra quis, feugiat a,
                    tellus. Phasellus viverra nulla ut metus varius laoreet.
                    Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel
                    augue. Curabitur ullamcorper ultricies nisi. Nam eget dui.
                    Etiam rhoncus. Maecenas tempus, tellus eget condimentum
                    rhoncus, sem quam semper libero, sit amet adipiscing sem
                    neque sed ipsum. Nam quam nunc, blandit vel, luctus
                    pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
                    tincidunt tempus. Donec vitae sapien ut libero venenatis
                    faucibus. Nullam quis ante. Etiam sit amet orci eget eros
                    faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet
                    nibh. Donec sodales sagittis magna. Sed consequat, leo eget
                    bibendum sodales, augue velit cursus nunc.
                  </Text>
                </Body>
              </CardItem>
              <CardItem footer>
                <Text>All right reserved</Text>
              </CardItem>
            </Card>
          </Content>
        </Container>
      </View>
    );
  }
}
