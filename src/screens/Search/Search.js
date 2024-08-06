import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React, { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "../../components/searchBar/SearchBar";
import AllProducts from "../../components/all-products/AllProducts";
import axios from "axios";

export default function Search() {
  const [refreshing, setRefreshing] = useState(false);
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/products`
        );
        setProducts(response.data);
        setAllProducts(response.data);
      } catch (error) {
        console.error(
          "Error getting products:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchProducts();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const handleSearchChange = (query) => {
    if (!query) {
      setProducts(allProducts);
    } else {
      let filtered = allProducts.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase())
      );
      setProducts(filtered);
    }
  };

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Search any Products..."
        handleSearchChange={handleSearchChange}
      />
      <ScrollView
        vertical
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={{ marginTop: 30 }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <AllProducts products={products} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
