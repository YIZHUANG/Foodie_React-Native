import React from "react";
import Setting from "../components/setting";
import { DrawerNavigator } from "react-navigation";
import Profile from "../components/User/profile";
import StackNav from "./stackNav";
import DrawerContainer from "../common/drawerContanier";
import AboutUs from "../components/aboutUs";
import ContactUs from "../components/contactUs";
import Forum from "../components/Forum/forum";

const Drawer = DrawerNavigator(
  {
    First: {
      path: "/",
      screen: StackNav
    },
    Profile: {
      screen: Profile
    },
    Setting: {
      screen: Setting
    },
    ContactUs: {
      screen: ContactUs
    },
    AboutUs: {
      screen: AboutUs
    },
    Forum: {
      screen: Forum
    }
  },
  {
    //customized  drawer goes from here
    contentComponent: props => <DrawerContainer {...props} />,
    initialRouteName: "First",
    drawerPosition: "left",
    drawerWidth: 200,
    contentOptions: {
      activeColor: "red"
    }
  }
);

export default Drawer;
