import { StatusBar, StyleSheet, Text, View } from "react-native";
import AppNav from "./src/authentication/AppNav";
import { AuthProvider } from "./src/context/AuthContext";
import { SearchProvider } from "./src/context/SearchContext";

export default function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <StatusBar barStyle="default" />
        <AppNav />
      </SearchProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
