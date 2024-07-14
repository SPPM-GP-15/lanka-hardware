import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { items } from "../../data/data";
import ProductDeal from "./ProductDeal";
import { useNavigation } from "@react-navigation/native";

export default function Deals(props) {
  const limitedItems = items.slice(0, 4);
  const navigation = useNavigation();
  return (
    <View>
      <Text style={styles.txt}>{props.title}</Text>
      <FlatList
        data={limitedItems}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate("DetailProduct", { item })}
            >
              <View
                style={[
                  styles.container,
                  index === 0 ? { marginLeft: 18 } : { marginLeft: 9 },
                ]}
                key={item.id}
              >
                <ProductDeal item={item} />
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.id.toString()} // Corrected keyExtractor to return the id
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginVertical: 10,
    fontSize: 18,
    marginLeft: hp(3),
    fontWeight: "600",
  },
  container: {
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    marginRight: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    paddingTop: 5,
  },
});
