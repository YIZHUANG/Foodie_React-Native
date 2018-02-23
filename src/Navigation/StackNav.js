import React from "react";
import { StackNavigator } from "react-navigation";
import Dashboard from "../components/dashboard";
import Receipe from "../components/Receipe/receipe";
import FoodList from "../components/Product/foodlist";
import TabNav from "./tabNav";
import Search from "../components/search";
import Profile from "../components/User/profile";
import UpdateProfile from "../components/User/updateProfile";
import ForumNew from "../components/Forum/forumNew";
import Forum from "../components/Forum/forum";

const StackNav = StackNavigator({
  Main: {
    screen: Dashboard
  },
  Receipe: {
    screen: Receipe
  },
  TabNav: {
    screen: TabNav
  },
  Search: {
    screen: Search
  },
  Profile: {
    screen: Profile
  },
  UpdateProfile: {
    screen: UpdateProfile
  },
  Forum: {
    screen: Forum
  },
  ForumNew: {
    screen: ForumNew
  }
});

export default StackNav;
