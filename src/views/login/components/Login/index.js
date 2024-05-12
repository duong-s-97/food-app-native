import React, { Component, useState } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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

export default Login = () => {
  const [email, onChangeEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          width: 314,
          height: "100%",
          paddingTop: 58,
        }}
      >
        {/* input email  */}

        <View
          style={{
            height: 59,
            width: 314,
            borderBottomWidth: 1,
            borderBottomColor: "#919191",
            marginBottom: 34,
            paddingRight: 24,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              lineHeight: 17.9,
              fontWeight: "600",
              color: "#919191",
            }}
          >
            Email
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
              alignItems: "center",
            }}
          >
            <TextInput
              value={email}
              onChangeText={onChangeEmail}
              style={{
                width: "100%",
                height: "100%",
              }}
              placeholder="Dosamarvis@gmail.com"
            />
          </View>
        </View>
        {/* input password  */}
        <View
          style={{
            height: 59,
            width: 314,
            borderBottomWidth: 1,
            borderBottomColor: "#919191",
            marginBottom: 34,
            paddingRight: 24,
          }}
        >
          <Text
            style={{
              fontSize: 15,
              lineHeight: 17.9,
              fontWeight: "600",
              color: "#919191",
            }}
          >
            Password
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              height: "100%",
              alignItems: "center",
            }}
          >
            <TextInput
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={setPassword}
              style={{
                width: "100%",
                height: "100%",
              }}
              placeholder="* * * * * * * *"
            />
            <MaterialCommunityIcons
              name={showPassword ? "eye-off" : "eye"}
              size={24}
              color="#aaa"
              onPress={toggleShowPassword}
            />
          </View>
        </View>
        {/* forgot password  */}
        <TouchableOpacity>
          <Text
            style={{
              color: "#FA4A0C",
              fontWeight: 600,
              fontSize: 17,
              lineHeight: 20.29,
            }}
          >
            Forgot passcode?
          </Text>
        </TouchableOpacity>
        {/* login button  */}
        <TouchableOpacity
          style={{
            width: "100%",
            height: 70,
            backgroundColor: "#FA4A0C",
            top: 100,
            borderRadius: 30,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "#F6F6F9",
              fontWeight: "600",
              fontSize: 17,
              lineHeight: 20.29,
            }}
          >
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
