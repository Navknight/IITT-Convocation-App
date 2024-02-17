import { FontAwesome6 } from "@expo/vector-icons";
import {
  ReactNativeZoomableView,
  ReactNativeZoomableViewWithGestures,
} from "@openspacelabs/react-native-zoomable-view";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";

export default function Landing() {
  const ios = Platform.OS === "ios";
  const { height, width } = Dimensions.get("window");
  return (
    <ScrollView className="flex-1 bg-white">
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
          <View
            style={{
              backgroundColor: themeColors.bgLight,
              padding: 40,
              borderRadius: 100,
              marginTop: ios ? 0 : 100,
              height: "15rem",
              width: "15rem",
            }}
          >
            <FontAwesome6
              name="table-list"
              size={100}
              color={themeColors.bgDark}
            />
          </View>
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            Convocation Programme
          </Text>
        </View>

        <View className="px-4 space-y-2 flex-1 flex-col items-center m-10">
          <ReactNativeZoomableView>
            <Image
              source={require("~/assets/program.png")}
              style={{
                width: width * 0.9,
                height: height * 0.5,
                borderWidth: 2.5,
                borderColor: themeColors.bgDark,
                borderRadius: 10,
              }}
            />
          </ReactNativeZoomableView>
          <Text className="text-sm text-gray-400">Double Tap To Zoom</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
