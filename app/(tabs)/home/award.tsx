import { FontAwesome6 } from "@expo/vector-icons";
import { ReactNativeZoomableView } from "@openspacelabs/react-native-zoomable-view";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

function Card({ props }) {
  return (
    <View
      style={{
        borderRadius: 10,
        height: ios ? height * 0.3 : height * 0.3,
        width: width * 0.4,
        elevation: 5,
        margin: ios ? -(height * 0.08) : 15,
        backgroundColor: "white",
        borderColor: themeColors.bgDark, // Assuming themes.bgDark holds the desired color value
        borderWidth: 2, // Adjust the width as needed
        borderStyle: "solid", // You can change this to 'dashed', 'dotted', etc.
        alignItems: "center", // Center the content horizontally
        paddingTop: 20, // Adjust the gap between the image and text
      }}
    >
      <Image
        source={props.image}
        style={{
          height: 100,
          width: 100,
          borderRadius: 100,
        }}
      />
      <View style={{ marginTop: 10 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>{props.name}</Text>
        <Text style={{ textAlign: "center", fontSize: 12, marginTop: -10 }}>
          {props.desc}
        </Text>
        <Text style={{ textAlign: "center" }}>{props.item.email}</Text>
      </View>
    </View>
  );
}

export default function Award() {
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
          <View
            className="flex-col justify-center items-center w-60 h-60 m-5"
            style={{
              backgroundColor: themeColors.bgDark,
              borderRadius: 100,
              marginTop: ios ? 0 : 100,
            }}
          >
            <FontAwesome6
              name="trophy"
              size={100}
              color={themeColors.bgLight}
            />
          </View>
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold text-center"
          >
            Institute Awards
          </Text>
        </View>

        <View className="flex-col items-center justify-center" />
      </SafeAreaView>
    </ScrollView>
  );
}
