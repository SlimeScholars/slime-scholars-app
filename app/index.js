import React, { useEffect } from "react";

import { View, Text } from "react-native";
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
    <View className="flex-1 bg-fuchsia-200 h-12">
      <Text>Login</Text>
    </View>
  );
}
