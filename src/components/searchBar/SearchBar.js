import { useState, useEffect, useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { SearchContext } from "../../context/SearchContext";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";

export default function Searchbar(props) {
  const { value, setValue } = useContext(SearchContext);
  const navigation = useNavigation();

  const handleSearch = () => {
    if (value.trim() !== "") {
      navigation.navigate("Search", { search: value });

      //setValue("");
    }
  };

  return (
    <View style={{ marginBottom: hp(-2.5), marginHorizontal: hp(1) }}>
      <SearchBar
        placeholder={props.placeholder}
        onChangeText={(newVal) => {
          return setValue(newVal);
        }}
        value={value}
        platform={Platform.OS === "ios" ? "ios" : "android"}
        lightTheme={true}
        style={styles.search}
        focusable={true}
        placeholderTextColor="#5a5a5a"
        inputContainerStyle={{
          borderRadius: 10,
          backgroundColor: "white",
          height: 35,
        }}
        returnKeyType="search"
        leftIconContainerStyle={{ height: 100 }}
        containerStyle={{ backgroundColor: "#f2f2f2" }}
        keyboardType="default"
        searchIcon={{
          name: "search",
          type: "feather",
        }}
        clearIcon={{ name: "close", type: "antdesign" }}
        onSubmitEditing={handleSearch}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    color: "black",
    fontSize: 14,
  },
});
