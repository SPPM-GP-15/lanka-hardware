import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { ScrollView } from "react-native";
import ProductCard from "../../components/wishlist-product/ProductCard";
import { RefreshControl } from "react-native";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

export default function Wishlist() {
  const { user } = useContext(AuthContext);
  const [refreshing, setRefreshing] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  useEffect(() => {
    const getWishlist = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/wishlist/${user._id}`
        );
        setWishlist(response.data);
      } catch (error) {
        console.error(
          "Error adding to wishlist:",
          error.response ? error.response.data : error.message
        );
      }
    };
    getWishlist();
  }, [refreshing]);


  const onRefresh = () => {
    setRefreshing(true);
    setTimeout(() => setRefreshing(false), 1500);
  };
  return (
    <ScrollView
      showsVerticalScrollIndicator={true}
      style={styles.container}
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }
    >
      <View style={styles.screen}>
        {wishlist.length === 0 ? (
          <Text style={styles.empty}>Your wishlist is empty</Text>
        ) : (
          wishlist.map((item, index) => (
            <ProductCard key={index} item={item} setWishlist={setWishlist} wishlist={wishlist} />
          ))
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  empty: {
    textAlign: "center",
    fontSize: 18,
    marginTop: 50,
  },
  screen: {
    marginTop: 30,
    marginBottom: 50,
  },
  container: {
    //marginTop: 30,
  },
});
