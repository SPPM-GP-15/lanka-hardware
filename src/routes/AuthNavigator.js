import { useNavigation } from "@react-navigation/native";
import Icon from "react-native-vector-icons/Feather";

import Landing from "../screens/Auth/Landing";
import Login from "../screens/Auth/Login";
import Signup from "../screens/Auth/Signup";
import ForgotPassword from "../screens/Auth/ForgotPassword";

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
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Icon.Button
              name="arrow-left"
              size={25}
              color={"#000"}
              backgroundColor="#fff"
              onPress={() => navigation.navigate("Landing")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Signup"
        component={Signup}
        options={{
          tabBarVisible: false,
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Icon.Button
              name="arrow-left"
              size={25}
              color={"#000"}
              backgroundColor="#fff"
              onPress={() => navigation.navigate("Landing")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="ForgotPassword"
        component={ForgotPassword}
        options={{
          tabBarVisible: false,
          headerTintColor: "white",
          headerTitleStyle: { fontWeight: "bold", fontSize: 25 },
          headerBackTitleVisible: false,
          headerLeft: () => (
            <Icon.Button
              name="arrow-left"
              size={25}
              color={"#000"}
              backgroundColor="#fff"
              onPress={() => navigation.navigate("Login")}
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export { AuthStack };
