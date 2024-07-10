import React, { useState } from "react";
import {
  ScrollView,
  SafeAreaView,
  RefreshControl,
  StyleSheet,
  Dimensions,
} from "react-native";
import SearchBar from "../components/searchBar/SearchBar";
import Category from "../components/catergory/Category";
import Offer from "../components/offers/Offer";
import AllItemButton from "../components/buttons/AllItemButton";
import Deals from "../components/quick-deals/Deals";

const HomeProducts = () => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  const [type, setType] = useState("");
  const width = Dimensions.get("window").width;

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      >
        <SearchBar placeholder="Search any Products..." />
        <Category type={type} setType={setType} button />
        <Offer />
        <Deals />
        <AllItemButton />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeProducts;
