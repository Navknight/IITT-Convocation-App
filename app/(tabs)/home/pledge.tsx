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
  const s1 ="I, a Graduate of the Indian Institute of Technology Tirupati, pledge today to honour this oath;" +
  "\n\nThat I shall continue to work to acquire, disseminate and generate new knowledge;" +
  "\n\nThat in thought, word, and deed, I shall endeavour to contribute to human welfare by conscientiously adhering to the ethical values of my profession;" +
  "\n\nThat I shall work for an inclusive society and sustainable development." ;

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
            <FontAwesome6 name="user-graduate" size={100} color={themeColors.bgDark} />
          </View>
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            Convocation Pledge
          </Text>
        </View>

        <View className="px-4 space-y-2 flex-1 flex-col items-center">
          <Text className="text-gray text-lg p-4">{s1}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
