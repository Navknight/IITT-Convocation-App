import { FontAwesome6 } from "@expo/vector-icons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs, router } from "expo-router";
import React from "react";
import { Button, Image, Pressable, StyleSheet, Text } from "react-native";

import IITTlogo from "../../assets/IITT-logo.png";

import { themeColors } from "~/themes";

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={styles.tabBarIcon} {...props} />;
}

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarStyle: { height: 70 },
        tabBarItemStyle: { marginBottom: 10 },
        tabBarActiveTintColor: themeColors.bgDark,
        headerShadowVisible: true,
        headerStyle: { elevation: 5 },
      }}
      initialRouteName="/home"
    >
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          title: "Home",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerRight: () => (
            <Image
              source={IITTlogo}
              style={{
                height: 50,
                width: 80,
              }}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="info"
        options={{
          title: "Information",
          tabBarIcon: ({ color }) => <TabBarIcon name="info" color={color} />,
          headerRight: () => (
            <Pressable
              onPress={() => router.setParams({ refresh: "true" })}
              style={{
                marginRight: 10,
              }}
            >
              <FontAwesome6 name="repeat" size={20} />
            </Pressable>
          ),
        }}
      />

      <Tabs.Screen
        name="graduands"
        options={{
          headerShown: false,
          title: "Graduands",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="graduation-cap" color={color} />
          ),
          headerRight: () => (
            <Image
              source={IITTlogo}
              style={{
                height: 50,
                width: 80,
                marginRight: 10,
              }}
            />
          ),
        }}
      />

      <Tabs.Screen
        name="contacts"
        options={{
          title: "Contacts",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="address-book" color={color} />
          ),
          headerRight: () => (
            <Image
              source={IITTlogo}
              style={{
                height: 50,
                width: 80,
                marginRight: 10,
              }}
            />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    marginRight: 15,
  },
  tabBarIcon: {
    marginBottom: -3,
  },
});
