import { View, Text, StyleSheet } from "react-native";
import React, { useState } from "react";
import { ScrollView } from "react-native";
import ProductCard from "../../components/wishlist-product/ProductCard";
import { RefreshControl } from "react-native";

export default function Wishlist() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.screen}>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screen: {
    marginTop: 30,
    marginBottom: 50,
  },
  container: {
    //marginTop: 30,
  },
});
