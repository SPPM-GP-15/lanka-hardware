import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React from "react";
import SingleProduct from "../all-products/SingleProduct";
import { items } from "../../data/data";
import { useNavigation } from "@react-navigation/native";
import RNPickerSelect from "react-native-picker-select";

export default function AllProducts({products}) {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.resultsContainer}>
        {products && (
          <Text style={styles.title}>
            {products.length < 2 ? products.length : products.length - 1 + "+"}{" "}
            Item
            {products.length > 1 && "s"}
          </Text>
        )}
        <View style={styles.sortFilterContainer}>
          <View style={styles.filterButton}>
            <RNPickerSelect
              placeholder={{
                label: "Sort",
                value: null,
              }}
              onValueChange={(value) => console.log(value)}
              items={[
                { label: "Recommended", value: "recommend" },
                { label: "Price Low to High", value: "priceLtoH" },
                { label: "Price High to Low", value: "priceHtoL" },
                { label: "Best Selling", value: "bestsell" },
              ]}
            />
          </View>
        </View>
      </View>

      <View style={styles.grid}>
        {products.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.itemCard}
            onPress={() => navigation.navigate("DetailProductSearch", { item })}
          >
            <SingleProduct item={item} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  resultsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  filterButton: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    marginRight: 10,
  },

  title: {
    fontSize: 18,
    marginLeft: 14,
    fontWeight: "600",
  },
  grid: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginTop: 20,
    marginBottom: 50,
  },
  itemCard: {
    width: "48%",
    marginBottom: 16,
    padding: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    elevation: 2,
  },
});
