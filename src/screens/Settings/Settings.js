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
import Icon from "react-native-vector-icons/Entypo";

export default function Settings() {
  const { logout } = useContext(AuthContext);

  return (
    <ScrollView
      vertical
      showsVerticalScrollIndicator={true}
      style={styles.container}
    >
      <View style={{ marginBottom: 50 }}>
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
          <TouchableOpacity style={styles.option}>
            <View style={styles.section}>
              <Text style={styles.optionText}>My orders</Text>
              <Text style={styles.optionDetail}>Already have 12 orders</Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.section}>
              <Text style={styles.optionText}>Shipping addresses</Text>
              <Text style={styles.optionDetail}>3 addresses</Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.section}>
              <Text style={styles.optionText}>Payment methods</Text>
              <Text style={styles.optionDetail}>Visa ****34</Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option}>
            <View style={styles.section}>
              <Text style={styles.optionText}>My reviews</Text>
              <Text style={styles.optionDetail}>Reviews for 4 items</Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>

          <TouchableOpacity style={styles.option} onPress={() => logout()}>
            <View style={styles.section}>
              <Text style={styles.optionText}>Settings</Text>
              <Text style={styles.optionDetail}>
                Notifications, Forgot password
              </Text>
            </View>
            <Icon name="chevron-right" size={18} />
          </TouchableOpacity>
        </View>
      </View>
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
});
