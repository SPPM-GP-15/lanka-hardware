import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
const ProductCard = () => {
  return (
    <View style={styles.productCard}>
      <View style={styles.bookmarkContainer}>
        <Icon name="bookmark-slash" size={20} color="#666" onPress={() => {}} />
      </View>
      <Image
        source={{
          uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvmVxyZKcn9YaQjGCRZ4ZYtt5OyMWRRn9sWg&s",
        }}
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
