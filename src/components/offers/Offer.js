import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

export default function Offer() {
  const images = [
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Books/BB/JULY/1242x550_Header-BB-Jul23.jpg",
    "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Wireless/devjyoti/PD23/Launches/Updated_ingress1242x550_3.gif",
  ];
  return (
    <View style={{ marginVertical: 10 }}>
      <Swiper showsButtons={false} autoplay height={200}>
        {images.map((img, index) => (
          <View key={index} style={{ alignItems: "center" }}>
            <Image
              style={{ width: "100%", height: "100%" }}
              source={{ uri: img }}
            />
          </View>
        ))}
      </Swiper>
    </View>
  );
}
