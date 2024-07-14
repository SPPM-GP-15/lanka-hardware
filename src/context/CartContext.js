import React, { createContext, useState, useContext, useEffect } from "react";

// Create a Context for the cart
const CartContext = createContext();

// Create a provider component
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([
    {
      id: "1",
      name: "Nail 2 inch",
      imageUrl: "https://via.placeholder.com/200",
      category: "Nails",
      price: 14.99,
    },
    {
      id: "2",
      name: "Paint 1 liter ",
      imageUrl: "https://via.placeholder.com/200",
      category: "Paint",
      price: 14.99,
    },
    {
      id: "3",
      name: "Nothing to put here just put some random value",
      imageUrl: "https://via.placeholder.com/200",
      category: "Nails",
      price: 34.99,
    },
    {
      id: "4",
      name: "Nothing to put here just put some random value",
      imageUrl: "https://via.placeholder.com/200",
      category: "Nails",
      price: 34.99,
    },
    {
      id: "5",
      name: "Nothing to put here just put some random value",
      imageUrl: "https://via.placeholder.com/200",
      category: "Nails",
      price: 34.99,
    },
    {
      id: "6",
      name: "Nothing to put here just put some random value",
      imageUrl: "https://via.placeholder.com/200",
      category: "Nails",
      price: 34.99,
    },
    {
      id: "7",
      name: "Nothing to put here just put some random value",
      imageUrl: "https://via.placeholder.com/200",
      category: "Nails",
      price: 34.99,
    },
  ]);

  const [subtotal, setSubtotal] = useState(0);
  const [shipping, setShipping] = useState(10.0);

  useEffect(() => {
    calculateSubtotal();
  }, [cartItems]);

  const calculateSubtotal = () => {
    const total = cartItems.reduce((acc, item) => acc + item.price, 0);
    setSubtotal(total);
  };

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
  };

  const removeItemFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        subtotal,
        shipping,
        addItemToCart,
        removeItemFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
