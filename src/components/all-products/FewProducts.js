import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import SingleProduct from "../all-products/SingleProduct";
import { SearchContext } from "../../context/SearchContext";
import { items } from "../../data/data";
import { useNavigation } from "@react-navigation/native";

export default function FewProducts() {
  const { value } = useContext(SearchContext);
  const limitedItems = items.slice(0, 4);
  const navigation = useNavigation();

  return (
    <View>
      <Text style={styles.txt}>All Products</Text>
      <View style={styles.container}>
        <View style={styles.grid}>
          {limitedItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.itemCard}
              onPress={() => navigation.navigate("DetailProduct", { item })}
            >
              <SingleProduct item={item} />
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  txt: {
    marginTop: 10,
    fontSize: 18,
    marginLeft: 28,
    fontWeight: "600",
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
