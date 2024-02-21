import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image, Dimensions, Platform, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import * as lists from "~/constants/index";

import { themeColors } from "../../../themes/index";
import { useLocalSearchParams } from "expo-router";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

interface Props {
  id: number;
  title: string;
  name: string;
  desc: string;
  image: string;
}

export default function Landing(props) {
  const toUse = useLocalSearchParams();
  const item = lists[toUse.list][toUse.index]
  return (
    <ScrollView className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("~/assets/backgroundiitt.jpeg")}
        style={{
          height: 300,
        }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="flex-row justify-center">
          <Image
            source={item.image}
            className="h-60 w-60 rounded-full overflow-hidden"
            style={{ marginTop: ios ? 0 : 100 }}
          />
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {item.name}
          </Text>
        </View>

        <View className="px-4 space-y-2">
          <Text className="text-gray-600">{item.desc}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
