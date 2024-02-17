import { Stack } from "expo-router";
import { useRouteInfo } from "expo-router/build/hooks";
import React from "react";
import { Image } from "react-native";

export default function Layout() {
    const info = useRouteInfo();
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Graduands",
          headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.png")}
              style={{ width: 80, height: 50 }}
            />
          ),
        }}
      />
      <Stack.Screen name="graduandsPage" options={{
        headerTitle: info.params.list,
        headerRight: () => (
            <Image
              source={require("../../../assets/IITT-logo.png")}
              style={{ width: 80, height: 50 }}
            />
          ),
      }} />
    </Stack>
  );
}
