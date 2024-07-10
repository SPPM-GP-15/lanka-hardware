import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import AppNav from "./src/authentication/AppNav";
import { AuthProvider } from "./src/context/AuthContext";
import { SearchProvider } from "./src/context/SearchContext";

export default function App() {
  return (
    <AuthProvider>
      <SearchProvider>
        <StatusBar barStyle="dark-content" />
        <AppNav />
      </SearchProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
