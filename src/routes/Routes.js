import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import { View } from "react-native";

import HomeProducts from "../screens/HomeProducts";
import Wishlist from "../screens/Wishlist";
import Search from "../screens/Search";
import Settings from "../screens/Settings/Settings";
import Cart from "../screens/Cart/Cart";
import Landing from "../screens/Auth/Landing";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const AuthStack = () => {
  const navigation = useNavigation();

  return (
    <Stack.Navigator initialRouteName="Landing">
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={Login}
        options={{
          title: "Login",
          tabBarVisible: false,
          headerStyle: { backgroundColor: "#405D72" },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Icon.Button
              name="arrow-left"
              size={25}
              style={{ paddingLeft: 20 }}
              backgroundColor="#405D72"
              onPress={() => navigation.navigate("Landing")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          title: "Sign Up",
          tabBarVisible: false,
          headerStyle: { backgroundColor: "#405D72", borderBottomWidth: 0 },
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Icon.Button
              name="arrow-left"
              size={25}
              backgroundColor="#405D72"
              style={{ paddingLeft: 20 }}
              onPress={() => navigation.navigate("Landing")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

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
        name="Settings"
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

export { AppTab, AuthStack };
