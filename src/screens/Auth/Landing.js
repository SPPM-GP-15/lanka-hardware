import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  Image,
} from "react-native";
import React, { useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import { AuthContext } from "../../context/AuthContext";

export default function Landing() {
  const navigation = useNavigation();
  const { login } = useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#f5f5f5" }}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCiNRnleO4lzGCO5EfJyCP3YSz7y5BIIQX8Q&s",
            }}
            style={{ width: 300, height: 300, borderRadius: 150 }}
          />
        </View>

        <Text style={styles.title}>Discover the Best Hardware Deals</Text>

        <Text style={styles.subtitle}>
          Explore our vast collection of hardware products and get the best
          prices in town.
        </Text>

        <View style={{ flex: 1, justifyContent: "flex-end", marginBottom: 20 }}>
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
  },
  imageContainer: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    textAlign: "center",
    fontSize: 16,
    marginBottom: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
  },
  button: {
    backgroundColor: "#F7E7DC",
    padding: 15,
    borderRadius: 10,
    borderWidth: 0.17,
    paddingHorizontal: 30,
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
