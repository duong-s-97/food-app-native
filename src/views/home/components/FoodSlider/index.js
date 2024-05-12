import React, { Component, useState } from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  StatusBar,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from "react-native";
import SlideItem from "./SlideItem";
import { menuFoodsItems, menuDrinksItems, menuSnacksItiems } from "./constants";

export default function FoodSlider({ value }) {
  const renderSlideValue = (value) => {
    {
      if (value === "foods") {
        return menuFoodsItems;
      }
      if (value === "snacks") {
        return menuSnacksItiems;
      }
      if (value === "drinks") {
        return menuDrinksItems;
      }
    }
  };
  return (
    <View>
      <TouchableOpacity>
        <Text
          style={{
            color: "#FA4A0C",
            position: "absolute",
            top: 10,
            left: 305,
            fontWeight: "600",
            fontSize: 15,
          }}
        >
          See more
        </Text>
      </TouchableOpacity>
      <View style={{ top: 28 }}>
        <FlatList
          data={renderSlideValue(value)}
          renderItem={({ item }) => <SlideItem item={item} />}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          style={{
            height: 321,
          }}
        />
      </View>
    </View>
  );
}
