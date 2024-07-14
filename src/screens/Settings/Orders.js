import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";
import OrderBox from "../../components/orders/OrderBox";
import { ScrollView } from "react-native";

export default function Orders() {
  const navigation = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);

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
  const orders = {
    itemName: "Item 1",
    orderDescription: "this ideads asddsdsda asd asdasd asd asd asdsads asdasd",
    customerName: "Estimated",
    orderPrice: 29.99,
    orderStatus: "Cancelled",
    category: "Hardware",
  };

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
            <View style={{ paddingHorizontal: 15 }}>
              <OrderBox order={orders} />
              <OrderBox order={orders} />
              <OrderBox order={orders} />
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
            <View style={{ paddingHorizontal: 15 }}>
              <OrderBox order={orders} />
              <OrderBox order={orders} />
              <OrderBox order={orders} />
              <OrderBox order={orders} />
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
            <View style={{ paddingHorizontal: 15 }}>
              <OrderBox order={orders} />
              <OrderBox order={orders} />
              <OrderBox order={orders} />
              <OrderBox order={orders} />
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
          values={["Processing", "Completed", "Cancelled"]}
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
