import React, { Component } from "react";
import {
  AntDesign,
  Feather,
  Ionicons,
  Octicons,
  FontAwesome6,
  FontAwesome,
  Entypo,
  Foundation,
} from "@expo/vector-icons";
import Svg, { Path } from "react-native-svg";
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

const ACTIVE_COLOR = "#FA4A0C";
const NO_ACTIVE_COLOR = "#9A9A9D";

export default Footer = () => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingLeft: 50,
        paddingRight: 50,
      }}
    >
      <TouchableOpacity
        style={{
          width: 31,
          height: 31,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[styles.noActive]}>
          <Octicons name="home" size={24} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 31,
          height: 31,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[styles.noActive]}>
          <FontAwesome6 name="heart" size={24} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 31,
          height: 31,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[styles.noActive]}>
          <Feather name="user" size={24} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: 31,
          height: 31,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={[styles.noActive]}>
          <Entypo name="back-in-time" size={24} />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  active: {
    color: ACTIVE_COLOR,
  },
  noActive: {
    color: NO_ACTIVE_COLOR,
  },
});
