import { Stack } from "expo-router";
import React from "react";
import { useFonts } from "expo-font";

export default function Layout() {
  const [fontsLoaded] = useFonts({
    "Nunito-Sans-Black": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-Black.ttf"),
    "Nunito-Sans-BlackItalic": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-BlackItalic.ttf"),
    "Nunito-Sans-Bold": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-Bold.ttf"),
    "Nunito-Sans-BoldItalic": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-BoldItalic.ttf"),
    "Nunito-Sans-ExtraBold": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-ExtraBold.ttf"),
    "Nunito-Sans-ExtraBoldItalic": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-ExtraBoldItalic.ttf"),
    "Nunito-Sans-ExtraLight": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-ExtraLight.ttf"),
    "Nunito-Sans-ExtraLightItalic": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-ExtraLightItalic.ttf"),
    "Nunito-Sans-Italic": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-Italic.ttf"),
    "Nunito-Sans-Light": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-Light.ttf"),
    "Nunito-Sans-LightItalic": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-LightItalic.ttf"),
    "Nunito-Sans-Medium": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-Medium.ttf"),
    "Nunito-Sans-MediumItalic": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-MediumItalic.ttf"),
    "Nunito-Sans-Regular": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-Regular.ttf"),
    "Nunito-Sans-SemiBold": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-SemiBold.ttf"),
    "Nunito-Sans-SemiBoldItalic": require("../assets/fonts/Nunito_Sans/NunitoSans_10pt-SemiBoldItalic.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="signup"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
