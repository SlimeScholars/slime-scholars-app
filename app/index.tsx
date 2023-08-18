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

import { styled } from 'nativewind'

const StyledView = styled(View)
const StyledText = styled(Text)
const StyledTouchableOpacity = styled(TouchableOpacity)
const StyledTextInput = styled(TextInput)

export default function Login() {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

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
    <StyledView
      className="bg-white h-screen -top-2"
      style={{
        flex: 1,
      }}
    >
      <StatusBar style="light" backgroundColor="#F649DA" />
      <StyledView
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
      </StyledView>
      <StyledView
        className="flex justify-start"
        style={{
          flex: 3,
        }}
      >
        <StyledText
          className="text-center text-4xl font-bold text-hotpink"
          style={{
            fontFamily: "Nunito-Sans-Black",
          }}
        >
          Log in
        </StyledText>
        <StyledView className="w-full px-10 flex flex-col items-start justify-start">
          <StyledTextInput
            className="mt-6 w-full mx-auto pb-2 border-b-[0.5px] border-grey text-grey text-lg"
            placeholder="Username"
            style={{
              fontFamily: "Nunito-Sans-Regular",
            }}
            onChangeText={(text) => setUsername(text)}
            textContentType="username"
          />
          <StyledView className="relative w-full mt-8 pb-2 border-b-[0.5px] border-grey flex-row justify-between items-center">
            <StyledTextInput
              className="w-full mx-auto text-grey text-lg"
              placeholder="Password"
              style={{
                fontFamily: "Nunito-Sans-Regular",
              }}
              onChangeText={(text) => setPassword(text)}
              textContentType="password"
              secureTextEntry={!passwordVisible}
            />
            <StyledTouchableOpacity
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
            </StyledTouchableOpacity>
          </StyledView>
          <StyledTouchableOpacity
            className="mt-8 w-full flex-row justify-start items-center mx-auto py-3 mb-3"
            onPress={login}
          >
            <StyledText
              className="text-center text-grey text-2xl mr-1 mb-0.5"
              style={{
                fontFamily: "Nunito-Sans-ExtraBold",
              }}
            >
              Sign in
            </StyledText>
            <Entypo name="arrow-right" size={28} color="#F649DA" />
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
      <StyledView
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
        <StyledView className="w-full px-10 z-50 absolute bottom-10 flex flex-row justify-between items-center">
          <StyledTouchableOpacity
            className="flex-row justify-center items-center"
            onPress={() => {
              router.replace("forgot-password");
            }}
          >
            <StyledText
              className="text-center text-white text-lg"
              style={{
                fontFamily: "Nunito-Sans-Bold",
              }}
            >
              Forgot password
            </StyledText>
          </StyledTouchableOpacity>
          <StyledTouchableOpacity
            className="flex-row justify-center items-center"
            onPress={() => {
              router.replace("signup");
            }}
          >
            <StyledText
              className="text-center text-white text-lg"
              style={{
                fontFamily: "Nunito-Sans-Bold",
              }}
            >
              Sign up
            </StyledText>
          </StyledTouchableOpacity>
        </StyledView>
      </StyledView>
    </StyledView>
  );
}
