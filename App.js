import { StatusBar, StyleSheet, Text, View } from "react-native";
import AppNav from "./src/authentication/AppNav";
import { AuthProvider } from "./src/context/AuthContext";
import { SearchProvider } from "./src/context/SearchContext";
import { CartProvider } from "./src/context/CartContext";

export default function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <SearchProvider>
          <StatusBar barStyle="default" />
          <AppNav />
        </SearchProvider>
      </CartProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
