import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import React, { useContext } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export default function Landing() {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#FFF8F3" }}>
      <View style={styles.container}>
        <Image
          source={require("../../../assets/icon.png")}
          style={styles.image}
        />
        <View
          style={{
            flex: 1,
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <Text style={styles.title}>Discover the Best Hardware Deals</Text>

          <Text style={styles.subtitle}>
            Explore our vast collection of hardware products and get the best
            prices in town.
          </Text>
        </View>
        <View style={{ flex: 1, justifyContent: "flex-end", width: "100%" }}>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                navigation.navigate("Signup");
              }}
            >
              <Text style={styles.buttonText}>SIGN UP</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.redButton]}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={[styles.buttonText, { color: "#fff" }]}>LOG IN</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  image: {
    width: 300,
    height: 300,
    borderRadius: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1A2130",
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
    color: "#141E46",
  },
  buttonContainer: {
    flexDirection: "column",
    width: "100%",
  },
  button: {
    backgroundColor: "#F7E7DC",
    padding: 15,
    borderRadius: 15,
    borderWidth: 0.17,
    paddingHorizontal: 30,
    marginVertical: 15,
  },
  redButton: {
    backgroundColor: "#405D72",
  },
  buttonText: {
    color: "#000",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
  },
});
