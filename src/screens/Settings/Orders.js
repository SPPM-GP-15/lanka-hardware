import { View, Text, StyleSheet } from "react-native";
import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import OrderBox from "../../components/orders/OrderBox";
import { ScrollView } from "react-native";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

export default function Orders() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [orders, setOrders] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const parent = navigation.getParent();
    parent?.setOptions({
      tabBarStyle: { display: "none" },
    });

    return () => {
      parent?.setOptions({
        tabBarStyle: [{ display: "flex" }, null],
      });
    };
  }, [navigation]);

  useEffect(() => {
    const fetchOrdersByUser = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/orders/user/${user._id}`
        );
        setOrders(response.data);
      } catch (error) {
        console.error(
          "Error getting orders by user",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchOrdersByUser();
  }, []);

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            style={styles.box}
          >
            <View style={{ paddingHorizontal: 15, marginBottom: 150 }}>
              {orders
                .filter(
                  (order) =>
                    order.status === "Pending" || order.status === "New"
                )
                .flatMap((order) =>
                  order.items.length > 0
                    ? order.items.map((item, index) => (
                        <OrderBox
                          order={order}
                          key={`${order._id}-${index}`}
                          item={item}
                        />
                      ))
                    : null
                ).length === 0 ? (
                <Text style={{ marginTop: 50, textAlign: "center" }}>
                  No orders found
                </Text>
              ) : (
                orders
                  .filter(
                    (order) =>
                      order.status === "Pending" || order.status === "New"
                  )
                  .flatMap((order) =>
                    order.items.length > 0
                      ? order.items.map((item, index) => (
                          <OrderBox
                            order={order}
                            key={`${order._id}-${index}`}
                            item={item}
                          />
                        ))
                      : null
                  )
              )}
            </View>
          </ScrollView>
        );
      case 1:
        return (
          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            style={styles.box}
          >
            <View style={{ paddingHorizontal: 15, marginBottom: 150 }}>
              {orders
                .filter((order) => order.status === "Completed")
                .flatMap((order) =>
                  order.items.length > 0
                    ? order.items.map((item, index) => (
                        <OrderBox
                          order={order}
                          key={`${order._id}-${index}`}
                          item={item}
                        />
                      ))
                    : null
                ).length === 0 ? (
                <Text style={{ marginTop: 50, textAlign: "center" }}>
                  No completed orders
                </Text>
              ) : (
                orders
                  .filter((order) => order.status === "Completed")
                  .flatMap((order) =>
                    order.items.length > 0
                      ? order.items.map((item, index) => (
                          <OrderBox
                            order={order}
                            key={`${order._id}-${index}`}
                            item={item}
                          />
                        ))
                      : null
                  )
              )}
            </View>
          </ScrollView>
        );
      case 2:
        return (
          <ScrollView
            vertical
            showsVerticalScrollIndicator={true}
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            style={styles.box}
          >
            <View style={{ paddingHorizontal: 15, marginBottom: 150 }}>
              {orders
                .filter((order) => order.status === "Cancelled")
                .flatMap((order) =>
                  order.items.length > 0
                    ? order.items.map((item, index) => (
                        <OrderBox
                          order={order}
                          key={`${order._id}-${index}`}
                          item={item}
                        />
                      ))
                    : null
                ).length === 0 ? (
                <Text style={{ marginTop: 50, textAlign: "center" }}>
                  No cancelled orders
                </Text>
              ) : (
                orders
                  .filter((order) => order.status === "Cancelled")
                  .flatMap((order) =>
                    order.items.length > 0
                      ? order.items.map((item, index) => (
                          <OrderBox
                            order={order}
                            key={`${order._id}-${index}`}
                            item={item}
                          />
                        ))
                      : null
                  )
              )}
            </View>
          </ScrollView>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Orders</Text>
      <View style={{ paddingHorizontal: 15 }}>
        <SegmentedControl
          values={["Pending", "Completed", "Cancelled"]}
          selectedIndex={selectedIndex}
          onChange={(event) => {
            setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
          }}
        />
      </View>
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  header: {
    padding: 10,
    paddingHorizontal: 15,
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  box: {
    marginVertical: 20,
    height: "100%",
  },
});
