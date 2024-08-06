import React, { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Dimensions,
  Text,
  SafeAreaView,
  Platform,
} from "react-native";
import SearchBar from "../../components/searchBar/SearchBar";
import Category from "../../components/catergory/Category";
import Offer from "../../components/offers/Offer";
import AllItemButton from "../../components/buttons/AllItemButton";
import FewProducts from "../../components/all-products/FewProducts";
import Deals from "../../components/deal/Deals";
import CatergoryListedItems from "../../components/catergory/CatergoryListedItems";
import axios from "axios";

const HomeProducts = () => {
  const [products, setProducts] = useState([]);
  const [todaysProducts, setTodaysProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/products`
        );

        const todaysProductsList = response.data.filter((product) => {
          const today = new Date();
          const productDate = new Date(product.createdAt);
          return today.getDate() === productDate.getDate();
        });
        setTodaysProducts(todaysProductsList);
        const slicedProducts = response.data;
        setProducts(slicedProducts.slice(0, 10));
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

  const [type, setType] = useState("All");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.text}>Lanka Hardware</Text>
        <SearchBar
          placeholder="Search any Products..."
          handleSearchChange={handleSearchChange}
        />
        <Category type={type} setType={setType} />
        {type === "All" || null ? (
          <>
            <Offer />
            <Deals title={"Todays Deal"} products={todaysProducts} />

            <FewProducts products={products} />
            <AllItemButton />
          </>
        ) : (
          <CatergoryListedItems type={type} products={allProducts} />
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    color: "#000",
    marginLeft: "auto",
    fontWeight: "bold",
    marginRight: "auto",
    marginVertical: 10,
  },
  safeArea: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    marginTop: Platform.OS === "android" ? 40 : 0,
  },
});

export default HomeProducts;
