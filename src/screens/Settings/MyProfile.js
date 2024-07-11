import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Icon from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";

export default function MyProfile() {
  const { logout } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={true}
      style={styles.container}
    >
      <SafeAreaView style={{ marginBottom: 50 }}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://avatars.githubusercontent.com/u/76977136?v=4",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Ahmed Anwer</Text>
          <Text style={styles.email}>ahmedanwer@gmail.com</Text>
        </View>

        <View style={styles.section}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <View style={styles.section}>
              <Text style={styles.optionText}>Edit Profile</Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate("Orders")}
          >
            <View style={styles.section}>
              <Text style={styles.optionText}>My Orders</Text>
              <Text style={styles.optionDetail}>Already have 12 orders</Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate("ShippingAddress")}
          >
            <View style={styles.section}>
              <Text style={styles.optionText}>Shipping Address</Text>
              <Text style={styles.optionDetail}>3 addresses</Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => {}}>
            <View style={styles.section}>
              <Text style={styles.optionText}>Forgot Password</Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logOutBox} onPress={() => logout()}>
            <View style={styles.section}>
              <Text style={[styles.optionText, { fontSize: 19, color: "red" }]}>
                Log Out
              </Text>
            </View>
            <Icon name="log-out" size={23} color={"red"} />
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  email: {
    fontSize: 14,
    color: "#888",
  },
  section: {
    padding: 10,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },

  optionText: {
    fontSize: 16,
    fontWeight: "bold",
  },
  optionDetail: {
    fontSize: 14,
    color: "#888",
    marginTop: 3,
  },
  logOutBox: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderWidth: 0.2,
    borderColor: "red",
    marginTop: 50,
    borderRadius: 20,
    marginLeft: 20,
    marginRight: 20,
  },
});
