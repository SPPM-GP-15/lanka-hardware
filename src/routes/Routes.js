import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabActions, useNavigation } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/Feather";
import { View } from "react-native";

import Search from "../screens/Search/Search";
import Cart from "../screens/Cart/Cart";
import Checkout from "../screens/Cart/Checkout";
import Landing from "../screens/Auth/Landing";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import ForgotPassword from "../screens/Auth/ForgotPassword";
import MyProfile from "../screens/Settings/MyProfile";
import EditProfile from "../screens/Settings/EditProfile";
import ShippingAddress from "../screens/Settings/ShippingAddress";
import Orders from "../screens/Settings/Orders";
import AddAddress from "../screens/Settings/AddAddress";
import HomeProducts from "../screens/Home/HomeProducts";
import DetailProduct from "../screens/Home/DetailProduct";
import Wishlist from "../screens/WishList/Wishlist";

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
          tabBarVisible: false,
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarVisible: false,
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          tabBarVisible: false,
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
};

function HomeNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeProducts}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailProduct"
        component={DetailProduct}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#f2f2f2" },
        }}
      />
    </Stack.Navigator>
  );
}

function SearchNavigator() {
  return (
    <Stack.Navigator initialRouteName="Search">
      <Stack.Screen
        name="Search"
        component={Search}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="DetailProductSearch"
        component={DetailProduct}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTintColor: "black",
          headerStyle: { backgroundColor: "#f2f2f2" },
        }}
      />
    </Stack.Navigator>
  );
}

function CartNavigator() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen
        name="Cart"
        component={Cart}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

function SettingsNavigator() {
  return (
    <Stack.Navigator initialRouteName="Settings">
      <Stack.Screen
        name="Settings"
        component={MyProfile}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Orders"
        component={Orders}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: true,
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: true,
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="ShippingAddress"
        component={ShippingAddress}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: true,
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
      <Stack.Screen
        name="AddAddress"
        component={AddAddress}
        options={{
          headerShown: true,
          headerTitle: "",
          headerBackTitleVisible: false,
          headerShadowVisible: false,
          headerTintColor: "black",
        }}
      />
    </Stack.Navigator>
  );
}

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
          headerShown: false,
          tabBarLabel: "Home",
          tabBarIcon: ({ color }) => (
            <Icon name="home" color={color} size={26} />
          ),
        }}
        component={HomeNavigator}
      />
      <Tab.Screen
        name="Search Product"
        options={{
          tabBarLabel: "Search",
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="search" color={color} size={26} />
          ),
        }}
        component={SearchNavigator}
      />
      <Tab.Screen
        name="Shopping Cart"
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
        component={CartNavigator}
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
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Icon name="settings" color={color} size={26} />
          ),
        }}
        component={SettingsNavigator}
      />
    </Tab.Navigator>
  );
};

export { AppTab, AuthStack };
