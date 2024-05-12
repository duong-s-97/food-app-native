import React, { Component } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default LoadingPage = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#FF4B3A" }}>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          width: 73,
          height: 73,
          left: 49,
          top: 56,
          borderRadius: "50%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          style={{ width: 45.86, height: 49.65 }}
          source={require("../../images/logo.png")}
        />
      </View>
      <View style={{ top: 87, left: 51, width: 275, height: 112 }}>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 65,
            lineHeight: -56.44,
            color: "white",
            letterSpacing: -0.48,
            textAlign: "left",
            fontFamily: "SF-Pro-Rounded-Regular",
          }}
        >
          Food for
        </Text>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 65,
            lineHeight: -56.44,
            color: "white",
            letterSpacing: -0.48,
            textAlign: "left",
            fontFamily: "SF-Pro-Rounded-Regular",
          }}
        >
          Everyone
        </Text>
      </View>
      <Image
        style={{
          top: 366.34,
          left: 0,
          position: "absolute",
          zIndex: 2,
        }}
        source={require("../../images/ToyFaces_Tansparent_BG_49.png")}
      />
      <Image
        style={{
          top: 441.46,
          right: 0,
          position: "absolute",
          zIndex: 1,
        }}
        source={require("../../images/ToyFaces_Tansparent_BG_29.png")}
      />
      <LinearGradient
        // Background Linear Gradient
        colors={[
          "rgba(255, 71, 11, 0.01)",
          "rgba(255, 75, 58, 0.96)",
          "rgba(255, 75, 58, 1)",
        ]}
        style={{
          position: "absolute",
          width: "100%",
          height: 195,
          top: 630,
          zIndex: 3,
        }}
        start={[0.5, 0]}
        end={[0.5, 1]}
      />

      <TouchableOpacity
        style={{
          backgroundColor: "white",
          width: 314,
          height: 70,
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 30,
          top: 590,
          zIndex: 4,
          left: 51,
        }}
      >
        <Text
          style={{
            fontSize: 17,
            fontWeight: "600",
            lineHeight: 20.29,
            color: "#FF460A",
          }}
        >
          Get started
        </Text>
      </TouchableOpacity>
    </View>
  );
};
