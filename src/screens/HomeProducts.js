import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function HomeProducts() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text>HomeProducts</Text>
      <Text
        onPress={() => {
          navigation.navigate("ProductDetail");
        }}
      >
        Product 1
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
  },
});
