import React, { Component, useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Animated,
} from "react-native";
import FoodSlider from "./components/FoodSlider/index";
import { homeTabs } from "./constants";
import { AntDesign, Feather, Ionicons } from "@expo/vector-icons";
import Footer from "../components/Footer";

const ACTIVE_COLOR = "#FA4A0C";
const NO_ACTIVE_COLOR = "#9A9A9D";

export default HomePage = () => {
  const [isActive, setIsActive] = useState("foods");
  const leftValue = useState(new Animated.Value(0))[0];

  const handleAcitveTabs = (value, toValue) => {
    Animated.timing(leftValue, {
      toValue: toValue,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsActive(value);
  };

  const RENDER_TABS = (item) => {
    return (
      <TouchableOpacity
        key={item.id}
        onPress={() => handleAcitveTabs(item.value, item.toValue)}
        style={{
          flex: 1,
          alignItems: "center",
          paddingBottom: 10,
        }}
        disabled={isActive === item.value ? true : false}
      >
        <Text
          style={[
            {
              fontWeight: 400,
              fontSize: 17,
              lineHeight: 20.29,
            },
            isActive === item.value ? styles.activeText : styles.noActiveText,
          ]}
        >
          {item.name}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#F2F2F2" }}>
      <View>
        {/* icon menu  */}
        <TouchableOpacity>
          <Image
            style={{ width: 22, height: 14.67, top: 74, left: 54.6 }}
            source={require("../../images/icons/menu.png")}
          />
        </TouchableOpacity>

        {/* icon cart  */}

        <TouchableOpacity>
          <Feather
            name="shopping-cart"
            style={{ top: 55, left: 349 }}
            size={24}
            color="#9A9A9D"
          />
        </TouchableOpacity>
      </View>

      <View style={{ width: 200, height: 82, top: 110, left: 50 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 34,
            lineHeight: 40.57,
            fontFamily: "SF-Pro-Rounded-Regular",
          }}
        >
          {/* Delicious food for you */}
        </Text>
      </View>
      {/* search food  */}
      <View
        style={{
          width: 314,
          height: 60,
          left: 50,
          top: 150,
          borderRadius: 30,
          backgroundColor: "#EFEEEE",
        }}
      >
        <TouchableOpacity>
          <Image
            style={{ width: 18, height: 18, left: 35, top: 21 }}
            source={require("../../images/icons/search.png")}
          />
          {/* <Ionicons
            name="search"
            style={{ left: 35, top: 21 }}
            size={24}
            color="black"
          /> */}
        </TouchableOpacity>

        <TextInput
          style={{
            // backgroundColor: "blue",
            alignItems: "center",
            left: 69,
            width: 220,
            height: 60,
            top: -18,
          }}
          autoCapitalize="none"
          secureTextEntry={true}
          placeholder="Search"
        />
      </View>
      <View style={{ marginTop: 200, left: 75, width: 261 }}>
        {/* <FoodSlider /> */}
        <View style={{ flexDirection: "row" }}>
          {/* render tabs  */}
          {homeTabs.map((item) => RENDER_TABS(item))}
          <Animated.View
            style={[
              {
                width: 87,
                height: 3,
                top: 30,
                left: 0,
                backgroundColor: "#FA4A0C",
                position: "absolute",
                borderRadius: 40,
                transform: [{ translateX: leftValue }],
              },
            ]}
          />
        </View>
      </View>
      <View
        style={{
          position: "absolute",
          top: 426,
          width: "100%",
        }}
      >
        <FoodSlider value={isActive} />
      </View>
      <View
        style={{
          position: "absolute",
          bottom: 50,
          width: "100%",
        }}
      >
        <Footer />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  activeBorder: {
    borderBottomWidth: 3,
    borderBottomColor: ACTIVE_COLOR,
  },

  activeText: {
    color: ACTIVE_COLOR,
  },
  noActiveText: {
    color: NO_ACTIVE_COLOR,
    fontFamily: "SF-Pro-Rounded-Regular",
  },
});
