import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import { category } from "../../data/data";
import axios from "axios";

export default function Category(props) {
  const [categories, setCategories] = useState([
    {
      _id: 0,
      name: "All",
    },
  ]);

  useEffect(() => {
    const fetchCatergories = async () => {
      try {
        const response = await axios.get(
          `https://lanka-hardware-9f40e74e1c93.herokuapp.com/api/categories`
        );
        setCategories([...categories, ...response.data]);
      } catch (error) {
        console.error(
          "Error getting catergories:",
          error.response ? error.response.data : error.message
        );
      }
    };
    fetchCatergories();
  }, []);

  const type = props.type;
  const setType = props.setType;
  return (
    <View>
      <Text style={styles.txt}>All Featured</Text>
      <FlatList
        data={categories}
        renderItem={({ item, index }) => {
          return (
            <TouchableOpacity
              activeOpacity={1}
              onPress={() => setType(type === item.name ? null : item.name)}
            >
              <View
                style={[
                  styles.container,
                  index === 0 ? { marginLeft: 18 } : { marginLeft: 9 },
                ]}
                key={item._id}
              >
                <View>
                  <Image
                    source={require("../../../assets/noImage.jpg")}
                    style={styles.img}
                  />
                </View>
                <Text
                  style={[
                    styles.title,
                    type === item.name
                      ? { color: "black", fontWeight: 600 }
                      : { color: "#606060" },
                  ]}
                >
                  {item.name}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        //keyExtractor={(category) => category.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  txt: {
    marginTop: 25,
    fontSize: 20,
    marginLeft: hp(3),
    fontWeight: "600",
  },
  container: {
    marginTop: 10,
    borderRadius: 10,
    marginRight: 13,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 14,
    paddingTop: 5,
  },
  img: {
    height: 60,
    width: 60,
    borderRadius: 100,
  },
});
