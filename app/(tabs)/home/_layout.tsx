import { Stack } from "expo-router";
import { useRouteInfo } from "expo-router/build/hooks";
import React from "react";
import { Image } from "react-native";

export default function Layout() {
  const routeInfo = useRouteInfo();
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
              source={require("../../../assets/IITT-logo.png")}
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
              source={require("../../../assets/IITT-logo.png")}
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
              source={require("../../../assets/IITT-logo.png")}
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
              source={require("../../../assets/IITT-logo.png")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="news"
        options={{
          headerTitle: "News",
          headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.png")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="award"
        options={{
          headerTitle: "Awards",
          headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.png")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
      <Stack.Screen
        name="speech"
        options={{
          headerTitle:
            routeInfo.params.speechType === "Director"
              ? "Director's Report"
              : "Chief Guest",
          headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.png")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
    </Stack>
  );
}
