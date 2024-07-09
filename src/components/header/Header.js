import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header() {
  return (
    <View>
      <Text style={styles.lightHeader}>Grab your</Text>
      <Text style={styles.darkHeader}>Header</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
