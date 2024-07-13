import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

export default function Processing() {
  return (
    <View style={styles.box}>
      <Text>Processing</Text>
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
