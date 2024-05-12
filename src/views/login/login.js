import React, { Component, useState } from "react";
import {
  SafeAreaView,
  Image,
  TouchableOpacity,
  StyleSheet,
  Text,
  View,
  Animated,
  TextInput,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Login from "./components/Login/index";
import Signup from "./components/Sign-up/index";

export default LoginPage = () => {
  const leftValue = useState(new Animated.Value(0))[0];
  const [changeLoginToSignup, setChangeLoginToSignup] = useState("login");

  const handleLoginPress = () => {
    Animated.timing(leftValue, {
      toValue: 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setChangeLoginToSignup("login");
  };

  const handleSignupPress = () => {
    Animated.timing(leftValue, {
      toValue: 170,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setChangeLoginToSignup("signup");
  };

  return (
    <View style={{ backgroundColor: "#f2f2f2" }}>
      {/* box logo  */}
      <View
        style={{
          backgroundColor: "white",
          justifyContent: "center",
          alignItems: "center",
          width: 414,
          height: 382,
          top: -15,
          borderRadius: 30,
          // elevation: 4,
        }}
      >
        <Image
          style={{ width: 150, height: 162.38 }}
          source={require("../../images/logo.png")}
        />
        <View>
          <Text style={styles.textSologan}>Food for Everyone</Text>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            paddingLeft: 40,
            paddingRight: 40,
            top: 70,
          }}
        >
          <TouchableOpacity
            onPress={() => handleLoginPress()}
            disabled={changeLoginToSignup === "login" ? true : false}
          >
            <Text style={styles.textButton}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => handleSignupPress()}
            disabled={changeLoginToSignup === "signup" ? true : false}
          >
            <Text style={styles.textButton}>Sign-up</Text>
          </TouchableOpacity>
        </View>
        <Animated.View
          style={[
            {
              width: 134,
              height: 3,
              top: 88,
              right: 90,
              gap: 0,
              borderRadius: 40,
              backgroundColor: "#FA4A0C",
              transform: [{ translateX: leftValue }],
            },
          ]}
        />
      </View>
      {changeLoginToSignup === "login" ? <Login /> : <Signup />}
    </View>
  );
};

const styles = StyleSheet.create({
  logoBox: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    width: 414,
    height: 382,
    top: -15,
    borderRadius: 30,
    elevation: 4,
  },
  textButton: {
    color: "#000000",
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 21.48,
  },
  textSologan: {
    color: "#000000",
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 21.48,
    color: "#FA4A0C",
  },
});
