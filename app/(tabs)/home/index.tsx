import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, ScrollView, Platform } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { mainGrid, ConvocationProgram } from "../../../constants/index";

import GridCard from "~/components/gridCard";
import ListCard from "~/components/listCard";

const ios = Platform.OS == "ios";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar />
      <SafeAreaView className={ios ? "-mb-8" : ""}>
        <View
          style={{
            alignItems: "center",
            marginHorizontal: 16,
            marginBottom: 16,
          }}
        >
          <Image
            source={require("../../../assets/IITT-logo.jpeg")}
            style={{ height: 100, width: 150 }}
          />
          <Text>4th and 5th (Joint) Convocation</Text>
          <Text>22nd February 2024</Text>
        </View>
      </SafeAreaView>

      {/* Main Content */}
      <View
        style={{
          paddingHorizontal: 20,
          paddingTop: 20,
          flexDirection: "row",
          flexWrap: "wrap",
          marginBottom: "10",
        }}
      >
        {mainGrid.map((item, index) => (
          <View key={item.id} style={{ width: "50%" }}>
            <GridCard {...item} index={index} list="mainGrid" />
          </View>
        ))}
      </View>

      {/* List of other tabs */}
      <View className="flex-col items-center justify-center w-full">
        {ConvocationProgram.map((item, index) => (
          <ListCard
            key={index}
            {...item}
            list="ConvocationProgram"
            index={index}
          />
        ))}
      </View>
    </ScrollView>
  );
}
