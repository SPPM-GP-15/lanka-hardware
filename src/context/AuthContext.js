import axios from "axios";
import React, { createContext, useContext, useState } from "react";
import Toast from "react-native-toast-message";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  const login = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/login",
        userData
      );
      if (response.data.success) {
        setUser(response.data.user);
        console.log(response.data.user);
        setLoading(false);
      } else {
        setLoading(false);
        Toast.show({
          type: "error",
          text1: "Failed",
          text2: response.data.message,
          visibilityTime: 4000,
          autoHide: true,
        });
      }
    } catch (error) {
      setLoading(false);
      Toast.show({
        type: "error",
        text1: "Failed",
        text2: error.response ? error.response.data : error.message,
        visibilityTime: 4000,
        autoHide: true,
      });
    }
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, loading, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
