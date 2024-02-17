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
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";

import { ConvocationProgram } from "~/constants";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

const Cards = (img) => {
  console.log(img);
  return (
    <View
      className="flex-1 flex-col items-center bg-white m-5 p-4"
      style={{
        width: width * 0.9,
        height: height * 0.5,
        elevation: 5,
        borderRadius: 10,
      }}
    >
      <ReactNativeZoomableView initialZoom={0.9}>
        <Image
          source={img.item}
          resizeMode="contain"
          style={{
            width: width * 0.6,
          }}
        />
      </ReactNativeZoomableView>
      <Text className="text-xs text-gray-500">Double Tap To Zoom</Text>
    </View>
  );
};

export default function Landing() {
  const params = useLocalSearchParams();
  const id = Number(params.id);
  const data = ConvocationProgram.find((item) => item.id === id);

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
          {data.image ? (
            <Image
              source={data.image}
              className="h-60 w-60 rounded-full overflow-hidden"
              style={{ marginTop: ios ? 0 : 100 }}
            />
          ) : (
            <View
              className="flex-col justify-center items-center w-60 h-60 m-5"
              style={{
                backgroundColor: themeColors.bgDark,
                borderRadius: 100,
                marginTop: ios ? 0 : 100,
              }}
            >
              <FontAwesome6
                name={data.icon}
                size={100}
                color={themeColors.bgLight}
              />
            </View>
          )}
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {data.title}
          </Text>
        </View>

        <FlatList
          numColumns={1}
          data={data.images}
          renderItem={(item) => <Cards {...item} />}
        />
      </SafeAreaView>
    </ScrollView>
  );
}
