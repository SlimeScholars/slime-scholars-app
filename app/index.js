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
    <View
      className="bg-white h-screen -top-2"
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" backgroundColor="#F649DA" />
      <View
        className="flex justify-center items-center w-screen overflow-x-hidden"
        style={{
          flex: 3,
        }}
      >
        <Image
          source={require("@Assets/graphics/login-banner.png")}
          style={{
            width: 415,
            height: 346,
          }}
        />
      </View>
      <View
        className="flex justify-start"
        style={{
          flex: 3,
        }}
      >
        <Text
          className="text-center text-4xl font-bold text-hotpink"
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
      </View>
      <View
        className="flex justify-center items-center bg-hotpink w-screen overflow-x-hidden -z-10"
        style={{
          flex: 1,
        }}
      >
        <Image
          source={require("@Assets/graphics/login-footer.png")}
          style={{
            width: 415,
            height: 219,
            zIndex: 50,
            top: -40,
          }}
        />
        <View className="w-full px-10 z-50 absolute bottom-10 flex flex-row justify-between items-center">
          <TouchableOpacity
            className="flex-row justify-center items-center"
            onPress={() => {
              router.replace("forgot-password");
            }}
          >
            <Text
              className="text-center text-white text-lg"
              style={{
                fontFamily: "Nunito-Sans-Bold",
              }}
            >
              Forgot password
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="flex-row justify-center items-center"
            onPress={() => {
              router.replace("signup");
            }}
          >
            <Text
              className="text-center text-white text-lg"
              style={{
                fontFamily: "Nunito-Sans-Bold",
              }}
            >
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
