import React, { useContext } from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import ProductData from "../../data/productData";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import Toast from "react-native-toast-message";

const DetailProduct = ({ route }) => {
  const productData = ProductData;
  const { user } = useContext(AuthContext);
  const { item } = route.params;

  const addToWishlist = async () => {
    try {
      const response = await axios.post(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/wishlist/add/${user._id}/${item._id}`
      );
      console.log("Added to wishlist");
    } catch (error) {
      console.error(
        "Error adding to wishlist:",
        error.response ? error.response.data : error.message
      );
    }
  };

  const addToCart = async () => {
    try {
      const response = await axios.post(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/cart/add`,
        {
          user: user._id,
          product: item._id,
        }
      );
      Toast.show({
        type: "info",
        text1: "Product added to Cart",
        visibilityTime: 4000,
        autoHide: true,
      });
      
    } catch (error) {
      console.error(
        "Error adding to cart",
        error.response ? error.response.data : error.message
      );
    }
  };

  const renderHeader = () => (
    <View style={styles.content}>
      <Image
        source={{
          uri: item.imageUrl,
        }}
        style={styles.image}
        resizeMode="contain"
      />
      <View style={styles.color}>
        {/* <Text style={styles.colorText}>Color: Black</Text>
        <View style={styles.colorOptionsContainer}>
          <View style={styles.colorOptions}>
            <Text style={styles.colorOption}>White</Text>
            <Text style={styles.colorOption}>Black</Text>
            <Text style={styles.colorOption}>Red</Text>
            <Text style={styles.colorOption}>Blue</Text>
          </View>
        </View> */}
        <Text style={styles.productTitle}>{item.name}</Text>
        <Text style={styles.productSubTitle}>{item.category.name}</Text>
        <Text style={styles.productPrice}>Rs: {item.newPrice}.00</Text>
        <Text style={styles.productDetail}>Product Detail</Text>
        <Text style={styles.productDetails}>{item.description}</Text>
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.shoppingCarButton}
            onPress={addToCart}
          >
            <Text style={styles.buttonText}>
              <Icon name="shopping-cart" size={20} color="white" /> Add to Cart
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.addtoWishList}
            onPress={addToWishlist}
          >
            <Text style={styles.buttonText}>
              <Icon name="bookmark" size={24} color="white" /> Save
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.similarProductsContainer}>
        <Text style={styles.similarProducts}>Similar Products</Text>
        <View style={styles.similarProductsSubContainer}>
          <Text style={styles.itemCount}>282+ Items</Text>
          <View style={styles.sortFilterContainer}>
            <TouchableOpacity style={styles.sortFilterButton}>
              <Text style={styles.sortFilterText}>
                <Icon name="chevrons-up" size={18} color="black" />
                Sort
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.sortFilterButton}>
              <Text style={styles.sortFilterText}>
                <Icon name="filter" size={18} color="black" />
                Filter
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );

  const renderProductCard = ({ item }) => (
    <TouchableOpacity style={styles.productCard}>
      <Image
        source={{ uri: item.image }}
        style={styles.productCardImage}
        resizeMode="cover"
      />
      <Text style={styles.productCardTitle}>{item.title}</Text>
      <Text style={styles.productCardSubtitle}>{item.subtitle}</Text>
      <Text style={styles.productCardPrice}>{item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <FlatList
      ListHeaderComponent={renderHeader}
      data={productData}
      renderItem={renderProductCard}
      keyExtractor={(item) => item.id.toString()}
      numColumns={2}
      contentContainerStyle={styles.productCardsContainer}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    paddingHorizontal: 20,
    marginTop: 30,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 20,
    marginBottom: 16,
    borderWidth: 2,
    borderColor: "black",
  },
  color: {
    marginVertical: 20,
  },
  colorText: {
    fontSize: 18,
    marginBottom: 20,
  },
  colorOptionsContainer: {
    borderColor: "black",
  },
  colorOptions: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginBottom: 20,
  },
  colorOption: {
    fontSize: 18,
    color: "black",
    borderWidth: 1,
    borderColor: "black",
    borderRadius: 10,
    padding: 10,
  },
  productTitle: {
    fontSize: 24,
    marginBottom: 10,
    fontWeight: "bold",
  },
  productSubTitle: {
    fontSize: 18,
    marginBottom: 20,
  },
  productPrice: {
    fontSize: 18,
    marginBottom: 10,
    fontWeight: "bold",
  },
  productDetail: {
    fontSize: 16,
    marginVertical: 10,
  },
  productDetails: {
    fontSize: 16,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  shoppingCarButton: {
    backgroundColor: "#f79f40",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 15,
  },
  buyNowButton: {
    backgroundColor: "#006bb8",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
  },
  addtoWishList: {
    backgroundColor: "#626269",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
    marginRight: 15,
  },
  compareButton: {
    backgroundColor: "#626269",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    flex: 1,
  },
  similarProductsContainer: {
    marginVertical: 20,
  },
  similarProducts: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: "bold",
  },
  similarProductsSubContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },
  itemCount: {
    fontSize: 18,
    marginRight: 10,
  },
  sortFilterContainer: {
    flexDirection: "row",
  },
  sortFilterButton: {
    backgroundColor: "#ccc",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginLeft: 10,
  },
  sortFilterText: {
    fontSize: 16,
  },
  productCardsContainer: {
    paddingHorizontal: 10,
    marginBottom: 30,
  },
  productCard: {
    backgroundColor: "#fff",
    margin: 10,
    borderRadius: 10,
    padding: 10,
    width: 180,
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  productCardImage: {
    width: "100%",
    height: 100,
    borderRadius: 10,
    marginBottom: 10,
  },
  productCardTitle: {
    fontSize: 16,
    fontWeight: "bold",
  },
  productCardSubtitle: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  productCardPrice: {
    fontSize: 16,
    color: "#f79f40",
    fontWeight: "bold",
  },
});

export default DetailProduct;
