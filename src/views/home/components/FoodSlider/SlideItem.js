import React, { Component } from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
} from "react-native";

const { width, height } = Dimensions.get("screen");
export default SlideItem = ({ item }) => {
  return (
    <View style={{ width: 220, height: 321, marginRight: 34, left: 50 }}>
      <View
        style={{
          width: 220,
          height: 270,
          backgroundColor: "white",
          bottom: 0,
          position: "absolute",
          borderRadius: 30,
          elevation: 5, // Độ đổ bóng
          shadowColor: "#393939",
          shadowOpacity: 0.1,
          alignItems: "center",
        }}
      >
        <View
          style={{
            top: -50,
            position: "absolute",
            width: 164.16,
            height: 164.16,
            borderRadius: 100,
            elevation: 5, // Độ đổ bóng
            shadowColor: "#393939",
            shadowOffset: { width: 0, height: 30 },
            shadowOpacity: 0.1,
            shadowRadius: 30,
            alignItems: "center",
          }}
        >
          <Image
            style={{
              width: 164.16,
              height: 164.16,
              borderRadius: 100,
            }}
            source={item.image}
          />
        </View>
        <Text
          style={{
            fontWeight: "600",
            fontSize: 22,
            lineHeight: 20.29,
            width: 125,
            textAlign: "center",
            bottom: 73,
            position: "absolute",
          }}
        >
          {item.name}
        </Text>
        <Text
          style={{
            color: "#FA4A0C",
            fontWeight: "700",
            fontSize: 17,
            lineHeight: 20.29,
            bottom: 39,
            position: "absolute",
          }}
        >
          ${item.amount}
        </Text>
      </View>
    </View>
  );
};
