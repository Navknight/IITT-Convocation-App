import { Stack } from "expo-router";
import React from "react";
import { Image } from "react-native";
import Landing from "./landing";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="landing"
        options={{
          headerTitle: "Home",
          headerRight: () => <Image source={require('../../../assets/IITT-logo.jpeg')} style={{width: 80, height: 50}} />,
        }}
      />
      <Stack.Screen name="stream" />
    </Stack>
  );
}
