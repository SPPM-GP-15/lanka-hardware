import { View, Text, ScrollView, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import Searchbar from "../components/searchBar/SearchBar";
import AllProducts from "../components/all-products/AllProducts";

export default function Search() {
  return (
    <SafeAreaView style={{ marginTop: 30 }}>
      <Searchbar placeholder="Search any Products..." />
      <ScrollView
        vertical
        showsVerticalScrollIndicator={true}
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
        style={{ marginTop: 20 }}
      >
        <AllProducts />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
