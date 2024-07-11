import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import { View } from "react-native";

import HomeProducts from "../screens/HomeProducts";
import Wishlist from "../screens/Wishlist";
import Search from "../screens/Search";
import Settings from "../screens/Settings/Settings";
import Cart from "../screens/Cart/Cart";

const Tab = createBottomTabNavigator();

const AppTab = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: "#3F72AF",
        tabBarInactiveTintColor: "black",
        tabBarStyle: [{ display: "flex" }, null],
      }}
    >
      <Tab.Screen
        name="Lanka Hardware"
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
        component={HomeProducts}
      />
      <Tab.Screen
        name="Search"
        options={{
          tabBarLabel: "Search",
          headerShown: false,

          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
        component={Search}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: "",
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "black",
          tabBarIcon: ({ color, focused }) => (
            <View
              style={[
                {
                  position: "absolute",
                  bottom: 0,
                  height: 68,
                  width: 68,
                  borderRadius: 68,
                  shadowColor: "#000",
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.1,
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "white",
                },
                focused && { backgroundColor: "#3F72AF" },
              ]}
            >
              <Icon name="shopping-cart" color={color} size={40} />
            </View>
          ),
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Wishlist"
        options={{
          tabBarLabel: "WishList",
          tabBarIcon: ({ color }) => (
            <Icon name="heart" color={color} size={26} />
          ),
        }}
        component={Wishlist}
      />
      <Tab.Screen
        name="My Profile"
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export { AppTab };
