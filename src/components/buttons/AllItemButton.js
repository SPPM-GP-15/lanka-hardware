import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function AllItemButton() {
  const navigation = useNavigation();
  return (
    <View style={styles.view}>
      <Pressable
        style={styles.pressable}
        onPress={() => navigation.navigate("ProductDeatil")}
      >
        <Text style={styles.txt}>View all items</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    fontSize: 15,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  pressable: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 5,
    paddingHorizontal: 20,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "black",
  },
  view: {
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: 50,
  },
});
