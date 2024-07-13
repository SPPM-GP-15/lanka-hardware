import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import SingleProduct from "../all-products/SingleProduct";
import { SearchContext } from "../../context/SearchContext";
import Icon from "react-native-vector-icons/FontAwesome5";
import { items } from "../../data/data";
import ModalDropdown from "react-native-modal-dropdown";
import { useNavigation } from "@react-navigation/native";

export default function AllProducts() {
  const navigation = useNavigation();
  const { value } = useContext(SearchContext);

  const handleSortSelect = (index, value) => {
    console.log(`Selected sort option: ${value}`);
    // Implement sorting logic here
  };

  const handleFilterSelect = (index, value) => {
    console.log(`Selected filter option: ${value}`);
    // Implement filtering logic here
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultsContainer}>
        {items && (
          <Text style={styles.title}>
            {items.length < 2 ? items.length : items.length - 1 + "+"} Item
            {items.length > 1 && "s"}
          </Text>
        )}
        <View style={styles.sortFilterContainer}>
          <ModalDropdown
            options={["Price: Low to High", "Price: High to Low", "Newest"]}
            style={styles.dropdownButton}
            textStyle={styles.dropdownButtonText}
            dropdownStyle={styles.dropdownStyle}
            dropdownTextStyle={styles.dropdownTextStyle}
            onSelect={handleSortSelect}
          >
            <View style={styles.sortButton}>
              <Text style={styles.sortButtonText}>Sort</Text>
              <Icon name="sort" size={18} color="#999" />
            </View>
          </ModalDropdown>
          <ModalDropdown
            options={["Category A", "Category B", "Category C"]}
            style={styles.dropdownButton}
            textStyle={styles.dropdownButtonText}
            dropdownStyle={styles.dropdownStyle}
            dropdownTextStyle={styles.dropdownTextStyle}
            onSelect={handleFilterSelect}
          >
            <View style={styles.filterButton}>
              <Text style={styles.filterButtonText}>Filter</Text>
              <Icon name="filter" size={18} color="#999" />
            </View>
          </ModalDropdown>
        </View>
      </View>

      <View style={styles.grid}>
        {items.map((item, index) => (
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
  sortFilterContainer: {
    flexDirection: "row",
  },
  dropdownButton: {
    padding: 10,
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 8,
    marginRight: 10,
  },
  dropdownButtonText: {
    marginRight: 5,
  },
  dropdownStyle: {
    width: 150,
  },
  dropdownTextStyle: {
    padding: 10,
    fontSize: 16,
    color: "#000",
  },
  sortButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  sortButtonText: {
    marginRight: 5,
  },
  filterButton: {
    flexDirection: "row",
    alignItems: "center",
  },
  filterButtonText: {
    marginRight: 5,
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
