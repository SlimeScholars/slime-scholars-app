import React, { useEffect, useState } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
  Image,
  TextInput,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Storage from "@Utils/storage";
import { Entypo, Ionicons } from "@expo/vector-icons";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(false);

  const login = async () => {
    console.log(username, password);
  };

  useEffect(() => {
    const checkLogin = async () => {
      return await Storage.get("token");
    };
    checkLogin().then((loggedIn) => {
      if (loggedIn) {
        router.replace("home");
      } else {
        console.log("not logged in");
      }
    });
  });
  return (
    <KeyboardAvoidingView
      className="flex-1"
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <StatusBar style="light" backgroundColor="#F649DA" />
      <View className="bg-hotpink h-48 flex-row justify-center items-end z-50 pt-10">
        <Image
          source={require("@Assets/icons/slime-login.png")}
          style={{
            width: 120,
            height: 120,
            zIndex: 50,
          }}
        />
      </View>
      <View className="rounded-full bg-hotpink h-[150px] w-[150px] scale-x-[6] -right-72 -top-28 z-30" />
      <LinearGradient
        colors={["#FF54E3", "#FF96EE"]}
        className="rounded-full bg-transparent h-[150px] w-[150px] scale-x-[6] -right-72 -top-60 mt-1 z-20"
      />
      <LinearGradient
        colors={["#FF94EE", "#FFCBF7"]}
        className="rounded-full bg-transparent h-[150px] w-[150px] scale-x-[6] -right-72 -top-96 mt-5 z-10"
      />
      <LinearGradient
        colors={["#FFCDF7", "#FFF4FD"]}
        className="rounded-full bg-transparent h-[150px] w-[150px] scale-x-[6] -right-72 -top-96 -mt-[122px] z-0"
      />
      <View
        className="rounded-full bg-white h-[150px] w-[150px] scale-x-[6] -right-72 -top-96 -mt-[151px] -z-10 -mb-[420px]"
        style={{
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 5,
          shadowColor: "rgba(173.29, 5.40, 176.72, 0.25)",
        }}
      />
      <Text
        className="mt-20 text-center text-4xl font-bold text-hotpink"
        style={{
          fontFamily: "Nunito-Sans-Black",
        }}
      >
        Log in
      </Text>
      <View className="w-full px-10 flex flex-col items-start justify-start">
        <TextInput
          className="mt-6 w-full mx-auto pb-2 border-b-[0.5px] border-grey text-grey text-lg"
          placeholder="Username"
          style={{
            fontFamily: "Nunito-Sans-Regular",
          }}
          onChangeText={(text) => setUsername(text)}
          textContentType="username"
        />
        <View className="relative w-full mt-8 pb-2 border-b-[0.5px] border-grey flex-row justify-between items-center">
          <TextInput
            className="w-full mx-auto text-grey text-lg"
            placeholder="Password"
            style={{
              fontFamily: "Nunito-Sans-Regular",
            }}
            onChangeText={(text) => setPassword(text)}
            textContentType="password"
            secureTextEntry={!passwordVisible}
          />
          <TouchableOpacity
            onPress={() => {
              setPasswordVisible(!passwordVisible);
            }}
            className="absolute right-0 bottom-2"
          >
            {passwordVisible ? (
              <Ionicons name="eye-off" size={24} color="#A4A1A1" />
            ) : (
              <Ionicons name="eye" size={24} color="#A4A1A1" />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          className="mt-8 w-full flex-row justify-start items-center mx-auto py-3 mb-3"
          onPress={login}
        >
          <Text
            className="text-center text-grey text-2xl mr-1 mb-0.5"
            style={{
              fontFamily: "Nunito-Sans-ExtraBold",
            }}
          >
            Sign in
          </Text>
          <Entypo name="arrow-right" size={28} color="#F649DA" />
        </TouchableOpacity>
      </View>
      <View
        className="rounded-full bg-white h-[150px] w-[150px] scale-x-[6] -right-72"
        style={{
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 5,
          shadowColor: "rgba(173.29, 5.40, 176.72, 0.25)",
        }}
      />

      <LinearGradient
        colors={["#FFF4FD", "#FFCDF7"]}
        className="rounded-full bg-transparent h-[150px] w-[150px] scale-x-[6] -right-72 -top-[150px]"
      />
      <LinearGradient
        colors={["#FFCBF7", "#FF94EE"]}
        className="rounded-full bg-transparent h-[150px] w-[150px] scale-x-[6] -right-72 -top-[295px] mt-5"
      />
      <LinearGradient
        colors={["#FF96EE", "#FF54E3"]}
        className="rounded-full bg-transparent h-[150px] w-[150px] scale-x-[6] -right-72 -top-96 -mt-9"
      />
      <View className="rounded-full bg-hotpink h-[150px] w-[150px] scale-x-[6] -right-72 -top-96 -mt-[123px]" />
      <View className="bg-hotpink h-56 -top-96 -mt-24 px-10 w-full flex-row justify-between items-start">
        <TouchableOpacity
          onPress={() => {
            router.push("forgot-password");
          }}
        >
          <Text
            className="text-white text-base"
            style={{
              fontFamily: "Nunito-Sans-Bold",
            }}
          >
            Forgot password
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            router.push("signup");
          }}
        >
          <Text
            className="text-white text-base"
            style={{
              fontFamily: "Nunito-Sans-Bold",
            }}
          >
            Sign up
          </Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
