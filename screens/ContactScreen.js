import { View, Text, Image, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { StatusBar } from "expo-status-bar";
import { contributors, organizers } from "../constants";
import ContributorCard from "../components/ContributorCard";
import OrganizerCard from "../components/OrganizerCard";

const ios = Platform.OS == "ios";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar />
      <SafeAreaView className={ios ? "-mb-8" : ""}>
        <View style={{ alignItems: "center", marginHorizontal: 16 }}>
          <Image
            source={require("../assets/IITT-logo.jpeg")}
            style={{ height: 100, width: 150 }}
          />
          <Text>4th and 5th (Joint) Convocation</Text>
          <Text>22nd February 2024</Text>
        </View>
      </SafeAreaView>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: themeColors.text }}
          className="text-3xl font-semibold items-center"
        >
          Organizers
        </Text>
      </View>

      <View
        style={{
          flex: 1,
        }}
      >
        {organizers.map((item) => (
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <OrganizerCard key={item.id} item={item} />
          </View>
        ))}
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{ color: themeColors.text }}
          className="text-3xl font-semibold items-center"
        >
          Contributors
        </Text>
      </View>

      <View
        // style={{
        //   flex: 1,
        // }}
        className="flex-row items-center justify-center"
      >
        {contributors.map((item) => (
          <ContributorCard key={item.id} item={item} />
        ))}
      </View>
    </ScrollView>
  );
}
