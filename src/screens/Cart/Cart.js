import React, { useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import CartItem from "../../components/cart/CartItem";
import { useCart } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";

const Cart = () => {
  const navigation = useNavigation();
  const { cartItems, subtotal, shipping, removeItemFromCart, setCartItems } =
    useCart();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const response = await axios.post(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/cart`,
          {
            user: user._id,
          }
        );
        setCartItems(response.data.cartItems);
      } catch (error) {
        console.error(
          "Error getting products from cart",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchCart();
  }, []);

  if (cartItems.length === 0) {
    return (
      <SafeAreaView style={styles.emptyContainer}>
        <View style={styles.box}>
          <Image
            source={require("../../../assets/noItem.png")}
            style={styles.noItemImage}
          />
        </View>
        <Text style={styles.title}>Your cart is empty</Text>
        <Text style={styles.message}>
          Looks like you haven't added any items to your cart yet.
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Search")}
        >
          <Text style={styles.buttonText}>Add Products</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.cartContainer}>
        {cartItems.map((item, index) => (
          <CartItem
            key={index}
            item={item}
            removeItemFromCart={removeItemFromCart}
          />
        ))}
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.totalContainer}>
          <Text style={styles.subTotalText}>
            Subtotal: Rs. {subtotal.toFixed(2)}
          </Text>
          <Text style={styles.subTotalText}>
            Shipping: Rs. {shipping.toFixed(2)}
          </Text>
          <Text style={styles.totalText}>
            Total: Rs. {(subtotal + shipping).toFixed(2)}
          </Text>
        </View>
        <TouchableOpacity
          style={styles.checkoutButton}
          onPress={() => navigation.navigate("ProfileDetails")}
        >
          <Text style={styles.checkoutButtonText}>Checkout</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  cartContainer: {
    paddingHorizontal: 16,
    paddingBottom: 200,
  },
  footer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    padding: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2, // Negative height to cast shadow upwards
    },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 4,
  },
  totalContainer: {
    marginBottom: 10,
  },
  totalText: {
    fontSize: 16,
    marginBottom: 5,
    fontWeight: "700",
  },
  subTotalText: {
    fontSize: 15,
    marginBottom: 5,
  },
  checkoutButton: {
    backgroundColor: "#452123",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    marginBottom: 30,
  },
  checkoutButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#f8f8f8",
  },
  box: {
    width: 200,
    height: 200,
    marginBottom: 20,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
  },
  noItemImage: {
    width: "60%",
    height: "65%",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333",
  },
  message: {
    fontSize: 16,
    textAlign: "center",
    color: "#666",
    marginBottom: 25,
    marginTop: 5,
    paddingHorizontal: 30,
  },
  button: {
    backgroundColor: "#3F72AF",
    padding: 8,
    paddingHorizontal: 30,
    borderRadius: 12,
  },
  buttonText: {
    color: "#fff",
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Cart;
