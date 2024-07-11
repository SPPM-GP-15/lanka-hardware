import { View, Text, StyleSheet } from "react-native";
import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import SegmentedControl from "@react-native-segmented-control/segmented-control";

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

  const renderContent = () => {
    switch (selectedIndex) {
      case 0:
        return (
          <View style={styles.box}>
            <Text>Processing Orders</Text>
          </View>
        );
      case 1:
        return (
          <View style={styles.box}>
            <Text>Delivered Orders</Text>
          </View>
        );
      case 2:
        return (
          <View style={styles.box}>
            <Text>Completed Orders</Text>
          </View>
        );
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Orders</Text>
      <SegmentedControl
        values={["Processing", "Delivered", "Completed"]}
        selectedIndex={selectedIndex}
        onChange={(event) => {
          setSelectedIndex(event.nativeEvent.selectedSegmentIndex);
        }}
      />
      {renderContent()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  header: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },
  box: {
    marginTop: 20,
    padding: 15,
    backgroundColor: "#f0f0f0",
    borderRadius: 8,
    alignItems: "center",
  },
});
