import { FontAwesome6 } from "@expo/vector-icons";
import {
  ReactNativeZoomableView,
  ReactNativeZoomableViewWithGestures,
} from "@openspacelabs/react-native-zoomable-view";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import Pdf from "react-native-pdf";
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

import { graduandData } from "~/constants";

export default function Landing() {
  const ios = Platform.OS === "ios";
  const params = useLocalSearchParams();
  const key = params.list;
  const data = graduandData[key];
  console.log(data);
  const { height, width } = Dimensions.get("window");
  return (
    <ScrollView className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("~/assets/BackGroundIIT.png")}
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
              name={data.icon}
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
            {key}
          </Text>
        </View>

        <View className="px-4 space-y-2 flex-1 flex-col items-center">
          <ReactNativeZoomableViewWithGestures>
            <Pdf
                source={data.four}
            />
            <Image source={data.image} />
          </ReactNativeZoomableViewWithGestures>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
