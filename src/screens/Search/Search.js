import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  RefreshControl,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Searchbar from "../../components/searchBar/SearchBar";
import AllProducts from "../../components/all-products/AllProducts";

export default function Search() {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };

  return (
    <SafeAreaView>
      <Searchbar placeholder="Search any Products..." />
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
        <AllProducts />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
