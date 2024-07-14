import React, { useState } from "react";
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

const HomeProducts = () => {
  const [type, setType] = useState("All");

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        keyboardShouldPersistTaps="handled"
      >
        <Text style={styles.text}>Lanka Hardware</Text>
        <SearchBar placeholder="Search any Products..." />
        <Category type={type} setType={setType} />
        {type === "All" || null ? (
          <>
            <Offer />
            <Deals title={"Todays Deal"} />
            <Deals title={"Trending Products"} />

            <FewProducts />
            <AllItemButton />
          </>
        ) : (
          <CatergoryListedItems type={type} />
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
