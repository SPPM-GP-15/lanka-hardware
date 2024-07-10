import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import SingleProduct from "../all-products/SingleProduct";
import { SearchContext } from "../../context/SearchContext";
import { items } from "../../data/data";

export default function AllProducts() {
  const { value } = useContext(SearchContext);

  return (
    <View style={styles.container}>
      {items && (
        <Text style={styles.title}>
          {items.length < 2 ? items.length : items.length - 1 + "+"} Item
          {items.length > 1 && "s"}
        </Text>
      )}

      {value ? (
        <View style={styles.grid}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.itemCard}>
              <SingleProduct item={item} />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        <View style={styles.grid}>
          {items.map((item, index) => (
            <TouchableOpacity key={index} style={styles.itemCard}>
              <SingleProduct item={item} />
            </TouchableOpacity>
          ))}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 18,
    marginLeft: 20,
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
