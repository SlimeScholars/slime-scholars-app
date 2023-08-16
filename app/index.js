import React, { useEffect } from "react";

import { View, Text } from "react-native";
import { StatusBar } from "expo-status-bar";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import Storage from "utils/storage";

export default function Login() {
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
    <View className="flex-1">
      <View className="bg-hotpink h-56"></View>
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
        className="rounded-full bg-white h-[150px] w-[150px] scale-x-[6] -right-72 -top-96 -mt-[151px] -z-10"
        style={{
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 1,
          shadowRadius: 20,
          elevation: 5,
          shadowColor: "rgba(173.29, 5.40, 176.72, 0.25)",
        }}
      ></View>
      <StatusBar style="light" backgroundColor="#F649DA" />
      <Text
        className="mt-20 text-center"
        style={{
          fontFamily: "Nunito-Sans",
        }}
      >
        Login
      </Text>
    </View>
  );
}
