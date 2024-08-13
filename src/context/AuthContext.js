import axios from "axios";
import React, { createContext, useContext, useState, useEffect } from "react";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const checkToken = async () => {
      const token = await AsyncStorage.getItem("userToken");
      if (token) {
        try {
          const response = await axios.get(
            "https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/me",
            { headers: { Authorization: `Bearer ${token}` } }
          );
          if (response.data.success) {
            setUser(response.data.user);
          } else {
            await AsyncStorage.removeItem("userToken");
          }
        } catch (error) {
          await AsyncStorage.removeItem("userToken");
        }
      }
    };

    checkToken();
  }, []);

  const login = async (userData) => {
    setLoading(true);
    try {
      const response = await axios.post(
        "https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/users/login",
        userData
      );
      if (response.data.success) {
        setUser(response.data.user);
        await AsyncStorage.setItem("userToken", response.data.token);
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

  const logout = async () => {
    setUser(null);
    await AsyncStorage.removeItem("userToken");
  };

  return (
    <AuthContext.Provider value={{ user, login, loading, logout, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
