import { View, Text, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Settings() {
  const { logout } = useContext(AuthContext);
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            logout();
          }}
        >
          <Text>LOG OUT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
