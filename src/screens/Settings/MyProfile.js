import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function MyProfile() {
  const { logout, user } = useContext(AuthContext);
  const navigation = useNavigation();

  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <SafeAreaView style={{ marginVertical: 40 }}>
        <View style={styles.header}>
          <Image
            source={{
              uri: "https://i.pinimg.com/736x/c0/74/9b/c0749b7cc401421662ae901ec8f9f660.jpg",
            }}
            style={styles.profileImage}
          />
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </View>
        <View style={{ flex: 1 }} />

        <View style={{ padding: 10, marginTop: 80 }}>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate("EditProfile")}
          >
            <View style={styles.section}>
              <View style={styles.optionContent}>
                <Icon name="edit" size={15} style={styles.optionIcon} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.optionText}>Edit Profile</Text>
                </View>
              </View>
            </View>
            <Icon name="chevron-right" size={18} color={"#aaa"} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate("Orders")}
          >
            <View style={styles.section}>
              <View style={styles.optionContent}>
                <Icon name="shopping-bag" size={15} style={styles.optionIcon} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.optionText}>My Orders</Text>
                  <Text style={styles.optionDetail}>
                    Already have 12 orders
                  </Text>
                </View>
              </View>
            </View>
            <Icon name="chevron-right" size={18} color={"#aaa"} />
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.option}
            onPress={() => navigation.navigate("ShippingAddress")}
          >
            <View style={styles.section}>
              <View style={styles.optionContent}>
                <Icon name="map-pin" size={15} style={styles.optionIcon} />
                <View style={{ marginLeft: 10 }}>
                  <Text style={styles.optionText}>Shipping Address</Text>
                </View>
              </View>
            </View>
            <Icon name="chevron-right" size={18} color={"#aaa"} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.logOutBox} onPress={() => logout()}>
            <View style={styles.section}>
              <View style={styles.optionContent}>
                <Text
                  style={[styles.optionText, { fontSize: 19, color: "red" }]}
                >
                  Log Out
                </Text>
              </View>
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
    flex: 1,
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 40,
    marginBottom: 20,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#06061b",
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
    padding: 8,

    borderBottomWidth: 1,
    borderBottomColor: "#eee",
  },
  optionContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  optionIcon: {
    marginRight: 10,
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
    borderWidth: 1,
    borderColor: "red",
    marginTop: 50,
    borderRadius: 15,
    marginLeft: 20,
    marginRight: 20,
  },
});
