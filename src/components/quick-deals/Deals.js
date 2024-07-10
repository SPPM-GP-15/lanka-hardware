import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Deals() {
  return (
    <View>
      <Text style={styles.txt}>Quick Deals</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 25,
    fontWeight: "600",
  },
});
