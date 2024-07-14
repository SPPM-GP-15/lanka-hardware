import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const OrderBox = ({ order }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Completed":
        return { backgroundColor: "#d4edda", color: "#155724" }; // Green background, dark green text
      case "Processing":
        return { backgroundColor: "#cce5ff", color: "#004085" }; // Blue background, dark blue text
      case "Cancelled":
        return { backgroundColor: "#f8d7da", color: "#721c24" }; // Red background, dark red text
      default:
        return { backgroundColor: "#e2e3e5", color: "#383d41" }; // Default grey background and text
    }
  };

  const statusStyle = getStatusStyle(order.orderStatus);

  return (
    <View style={styles.container}>
      <View style={styles.orderInfo}>
        <Image
          source={{
            uri: "https://avatars.githubusercontent.com/u/76977136?v=4",
          }}
          style={styles.image}
        />
        <View>
          <Text style={styles.itemName}>{order.itemName}</Text>
          <Text style={styles.orderDescription} numberOfLines={3}>
            {order.orderDescription}
          </Text>
          <Text style={styles.orderCount} numberOfLines={3}>
            {order.category}
          </Text>
        </View>
      </View>
      <View style={styles.orderDetails}>
        <Text style={styles.customerName}>Total Price</Text>
        <Text style={styles.orderPrice}>Rs {order.orderPrice}</Text>
      </View>
      <View
        style={[
          styles.orderStatus,
          { backgroundColor: statusStyle.backgroundColor },
        ]}
      >
        <Text style={[styles.status, { color: statusStyle.color }]}>
          {order.orderStatus}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 8,
    marginBottom: 16,
  },
  orderInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 60,
    height: 60,
    marginRight: 16,
  },
  itemName: {
    fontSize: 15,
    fontWeight: "bold",
  },
  orderDescription: {
    fontSize: 14,
    marginTop: 4,
    color: "#777",
    maxWidth: 90,
  },
  orderCount: {
    fontSize: 14,
    marginTop: 4,
    color: "#222",
    maxWidth: 90,
  },
  orderDetails: {
    alignItems: "flex-end",
  },
  customerName: {
    fontSize: 13,
    color: "#777",
  },
  orderPrice: {
    fontSize: 14,
    marginTop: 10,
    fontWeight: "bold",
  },
  orderStatus: {
    padding: 5,
    borderRadius: 4,
  },
  status: {
    fontSize: 10,
  },
});

export default OrderBox;
