import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Delivered() {
  return (
    <View style={styles.box}>
      <Text>Delivered</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
  },
});
