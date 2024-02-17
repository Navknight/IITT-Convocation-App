import { Stack } from "expo-router";
import React from "react";
import { Image } from "react-native";

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
          headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.jpeg")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
      <Stack.Screen name="stream" />
      <Stack.Screen
        name="attire"
        options={{
          headerTitle: "Attire",
          headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.jpeg")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="pledge"
        options={{
          headerTitle: "Pledge",
          headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.jpeg")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="program"
        options={{
          headerTitle: "Programme",
          headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.jpeg")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
    </Stack>
  );
}
