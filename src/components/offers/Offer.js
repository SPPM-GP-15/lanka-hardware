import { View, Text, Image } from "react-native";
import React from "react";
import Swiper from "react-native-swiper";

export default function Offer() {
  const images = [
    "https://www.aksmega.com.my/wp-content/uploads/2019/02/slider-image-banner-01.jpg",
    "https://im.hunt.in/cg/Munger/City-Guide/Hardware.jpg",
    "https://wqkt.com/wp-content/uploads/2022/03/hardware-banner.jpg",
    "https://d1csarkz8obe9u.cloudfront.net/posterpreviews/all-hardware-tools-sale-template-design-8ab526cc76312deeebf6e5041c5c9ad6_screen.jpg?ts=1681208904",
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
