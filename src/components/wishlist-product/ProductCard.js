import React, { useContext } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const ProductCard = ({ item, setWishlist, wishlist }) => {
  const { user } = useContext(AuthContext);

  const handleRemoveFromWishlist = async () => {
    try {
      const response = await axios.delete(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/wishlist/remove/${user._id}/${item._id}`
      );
      console.log("Removed from wishlist");
      if (response.status === 200) {
        setWishlist(wishlist.filter((product) => product._id !== item._id));
      }
    } catch (error) {
      console.error(
        "Error removing wishlist:",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <View style={styles.productCard}>
      <View style={styles.bookmarkContainer}>
        <Icon
          name="bookmark-slash"
          size={20}
          color="#666"
          onPress={handleRemoveFromWishlist}
        />
      </View>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>{item.name}</Text>
        <View style={styles.colorBar}>
          <View style={styles.colorBox}>
            <Text style={styles.productColor}>{item.manufacturer}</Text>
          </View>
        </View>
        <Text style={styles.productDescription}>{item.description}</Text>
        <View>
          <Text style={styles.productPrice}>Rs. {item.newPrice}.00</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  productCard: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 16,
    margin: 8,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    marginRight: 15,
  },
  productInfo: {
    flex: 1,
    justifyContent: "center",
  },
  productName: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 4,
  },
  colorBar: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  colorBox: {
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 4,
    paddingVertical: 2,
    paddingHorizontal: 8,
    marginRight: 4,
  },
  productColor: {
    fontSize: 14,
    color: "#666",
  },
  productPrice: {
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 4,
    padding: 3,
    alignSelf: "flex-start",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
    marginVertical: 2,
  },
  bookmarkContainer: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 1,
  },
});
export default ProductCard;
