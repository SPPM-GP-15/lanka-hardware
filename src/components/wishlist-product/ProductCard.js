import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Feather";

const ProductCard = () => {
  return (
    <View style={styles.productCard}>
      <View style={styles.bookmarkContainer}>
        <Icon name="bookmark" size={24} color="#666" />
      </View>
      <Image
        source={require("../../../assets/dulux.jpeg")}
        style={styles.productImage}
      />
      <View style={styles.productInfo}>
        <Text style={styles.productName}>Dulux Paint</Text>
        <View style={styles.colorBar}>
          <View style={styles.colorBox}>
            <Text style={styles.productColor}>Black</Text>
          </View>
          <View style={styles.colorBox}>
            <Text style={styles.productColor}>White</Text>
          </View>
        </View>
        <Text style={styles.productDescription}>
          Premium quality interior paint available.
        </Text>
        <View>
          <Text style={styles.productPrice}>Rs. 4500</Text>
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
    margin: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    flexDirection: "row",
    alignItems: "center",
  },
  productImage: {
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 16,
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
    marginBottom: 8,
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
    fontSize: 16,
    fontWeight: "bold",
    marginTop: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: "#666",
    borderRadius: 4,
    padding: 5,
    alignSelf: "flex-start",
  },
  productDescription: {
    fontSize: 14,
    color: "#666",
  },
  bookmarkContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    zIndex: 1,
  },
});

export default ProductCard;
