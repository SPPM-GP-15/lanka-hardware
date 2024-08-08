import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const OrderBox = ({ order, item }) => {
  const getStatusStyle = (status) => {
    switch (status) {
      case "Pending":
        return { backgroundColor: "#d4edda", color: "#155724" };
      case "New":
        return { backgroundColor: "#d4edda", color: "#155724" };
      case "Completed":
        return { backgroundColor: "#cce5ff", color: "#004085" };
      case "Cancelled":
        return { backgroundColor: "#f8d7da", color: "#721c24" };
      default:
        return { backgroundColor: "#e2e3e5", color: "#383d41" };
    }
  };
  const statusStyle = getStatusStyle(order.status);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.orderInfo}>
          <Image
            source={{
              uri: item.product.imageUrl,
            }}
            style={styles.image}
          />
          <View>
            <Text style={styles.itemName} numberOfLines={2}>
              {item.product.name}
            </Text>
            <Text style={styles.orderDescription} numberOfLines={3}>
              {item.product.description}
            </Text>
            <Text style={styles.orderCount} numberOfLines={3}>
              Quantity: {item.quantity}
            </Text>
          </View>
        </View>
        <View style={styles.orderDetails}>
          <Text style={styles.customerName}>Price</Text>
          <Text style={styles.orderPrice}>
            Rs {item.product.newPrice * item.quantity}.00
          </Text>
        </View>
        <View
          style={[
            styles.orderStatus,
            { backgroundColor: statusStyle.backgroundColor },
          ]}
        >
          <Text style={[styles.status, { color: statusStyle.color }]}>
            {order.status}
          </Text>
        </View>
      </View>
    </>
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
    maxWidth: 100,
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
    maxWidth: 80,
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
