import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AppNav from "./src/authentication/AppNav";
import { AuthProvider } from "./src/context/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <AppNav />
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {},
});
