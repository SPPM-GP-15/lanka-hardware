import axios from "axios";
import React, { createContext, useState, useContext, useEffect } from "react";
import { AuthContext } from "./AuthContext";

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useContext(AuthContext);
  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(500.0);
  const cartCount = cartItems.length;
  const total = subtotal + shipping;

  useEffect(() => {
    calculateSubtotal();
  }, [cartItems]);

  const calculateSubtotal = () => {
    const total = cartItems.reduce(
      (acc, item) => acc + item.product.newPrice * item.quantity,
      0
    );
    setSubtotal(total);
  };

  const addItemToCart = async (item) => {
    try {
      const response = await axios.post(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/cart/add`,
        {
          user: user._id,
          product: item._id,
        }
      );
      setCartItems(response.data.items);
      console.log("Added");
    } catch (error) {
      console.error(
        "Error adding to cart",
        error.response ? error.response.data : error.message
      );
    }
  };

  const removeItemFromCart = async (itemId) => {
    try {
      const response = await axios.post(
        `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/cart/remove`,
        {
          user: user._id,
          productId: itemId,
        }
      );
      setCartItems(cartItems.filter((item) => item.product._id !== itemId));
    } catch (error) {
      console.error(
        "Error removing from cart",
        error.response ? error.response.data : error.message
      );
    }
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        subtotal,
        shipping,
        addItemToCart,
        removeItemFromCart,
        setCartItems,
        cartCount,
        total,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
