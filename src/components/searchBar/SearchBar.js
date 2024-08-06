import React, { useContext } from "react";
import { Platform, StyleSheet, View } from "react-native";
import { SearchBar } from "react-native-elements";
import { SearchContext } from "../../context/SearchContext";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Searchbar(props) {
  const { value, setValue } = useContext(SearchContext);
  const { handleSearchChange } = props;

  const handleTextChange = (text) => {
    setValue(text);
    handleSearchChange(text);
  };

  return (
    <View style={{ marginBottom: hp(-2.5), marginHorizontal: hp(1) }}>
      <SearchBar
        placeholder={props.placeholder}
        onChangeText={handleTextChange}
        value={value}
        platform={Platform.OS === "ios" ? "ios" : "android"}
        lightTheme={true}
        style={styles.search}
        placeholderTextColor="#5a5a5a"
        inputContainerStyle={{
          borderRadius: 10,
          backgroundColor: "white",
          height: 35,
        }}
        returnKeyType="search"
        leftIconContainerStyle={{ height: 100 }}
        containerStyle={{ backgroundColor: "#f2f2f2" }}
        searchIcon={{
          name: "search",
          type: "feather",
        }}
        clearIcon={{ name: "close", type: "antdesign" }}
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
