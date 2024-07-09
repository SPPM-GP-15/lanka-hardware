import React, { useContext } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppTab, AuthStack } from "../routes/Routes";
import { AuthContext } from "../context/AuthContext";

function AppNav() {
  const { user } = useContext(AuthContext);
  return (
    <NavigationContainer>
      {user === null ? <AuthStack /> : <AppTab />}
    </NavigationContainer>
  );
}

export default AppNav;
