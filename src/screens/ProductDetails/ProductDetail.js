import React from "react";
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  Text,
  FlatList,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import productsData from "./ProductDetail.json";

const ProductDetail = ({ navigation }) => {
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
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
          <Icon name="shopping-cart" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <Image
          source={require("../../../assets/item1.png")}
          style={styles.image}
          resizeMode="contain"
        />
        <View style={styles.color}>
          <Text style={styles.colorText}>Color: Black</Text>
          <View style={styles.colorOptionsContainer}>
            <View style={styles.colorOptions}>
              <Text style={styles.colorOption}>White</Text>
              <Text style={styles.colorOption}>Black</Text>
              <Text style={styles.colorOption}>Red</Text>
              <Text style={styles.colorOption}>Blue</Text>
            </View>
          </View>
          <Text style={styles.productTitle}>Dulux Interiro Paint</Text>
          <Text style={styles.productSubTitle}>
            Dulux interior Emulsion paints (All Colours)
          </Text>
          <Text style={styles.productPrice}>Rs:4,500</Text>
          <Text style={styles.productDetail}>Product Detail</Text>
          <Text style={styles.productDetails}>
            Our premium quality interior paint is designed to provide a smooth
            and lasting finish for your indoor spaces. Available in a wide range
            of colors, this paint ensures excellent coverage, vibrant color, and
            durability. It is formulated to resist stains and is easy to clean.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.shoppingCarButton}>
              <Text style={styles.buttonText}>
                <Icon name="shopping-cart" size={20} color="white" /> Add to
                Cart
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buyNowButton}>
              <Text style={styles.buttonText}>
                <Icon name="dollar-sign" size={20} color="white" />
                Buy Now
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.viewSimilarButton}>
              <Text style={styles.buttonText}>
                <Icon name="eye" size={24} color="white" /> View Similar
              </Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.compareButton}>
              <Text style={styles.buttonText}>
                <Icon name="tag" size={24} color="white" />
                Compare
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.similarProductsContianer}>
          <Text style={styles.similarProducts}>Similar Products</Text>
          <View style={styles.similarProductsSubContianer}>
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
          <FlatList
            data={productsData}
            renderItem={renderProductCard}
            keyExtractor={(item) => item.id.toString()}
            numColumns={2}
            contentContainerStyle={styles.productCardsContainer}
          />
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 60,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 16,
    marginBottom: 10,
  },
  content: {
    paddingHorizontal: 20,
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
  },
  productDetail: {
    fontSize: 18,
    marginBottom: 10,
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
  viewSimilarButton: {
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
  similarProductsContianer: {
    marginVertical: 20,
  },
  similarProducts: {
    fontSize: 24,
    marginBottom: 5,
    fontWeight: "bold",
  },
  similarProductsSubContianer: {
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

export default ProductDetail;
