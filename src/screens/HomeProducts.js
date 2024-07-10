import React, { useState } from "react";
import { ScrollView, SafeAreaView, StyleSheet, Dimensions } from "react-native";
import SearchBar from "../components/searchBar/SearchBar";
import Category from "../components/catergory/Category";
import Offer from "../components/offers/Offer";
import AllItemButton from "../components/buttons/AllItemButton";
import Deals from "../components/quick-deals/Deals";
import FewProducts from "../components/all-products/FewProducts";

const HomeProducts = () => {
  const [type, setType] = useState("");
  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <SearchBar placeholder="Search any Products..." />
        <Category type={type} setType={setType} button />
        <Offer />
        <Deals title={"Todays Deal"} />
        <Deals title={"Trending Products"} />

        <FewProducts />
        <AllItemButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeProducts;
