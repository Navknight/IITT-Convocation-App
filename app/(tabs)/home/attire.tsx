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
  const s1 =
    "The Convocation Attire of the students and dignitaries have been designed with the support of the National Institute of Fashion Technology (NIFT), Chennai." +
    "\n\nDots and lines are not just the foundational elements of design. There are the signifiers of consciousness and evolution. A moving dot becomes a line signifying emancipation. A line thus created, contains within itself the power to transform into shapes, forms, or patterns. Human beings are no different. A student through guidance develops into a learned individual. Influenced by physical, environmental, sensorial, and emotional stimuli, that individual transforms into a professional serving the needs of a few and many. When the dot as a line becomes a form, the metamorphosis commences." +
    "\n\nThis phenomenon of metamorphosis is the philosophy of commencement. The Convocation Attire used for such an occasion acts as a visual sign of transformation. The cape designed in the colours of red and black is about forging meaningful ties with a social purpose. Printed by the craftspeople of Andhra Pradesh using natural dyes and hand-carved blocks, the lines and dots represent the material and visual culture of the region. The student cape that re-purposes as a stole offers personalisation for large audiences, which will motivate them to keep the object good." +
    "\n\nThe design of the Convocation Attire focuses on the ideology of the people, processes, technology of IIT Tirupati offering a new sense of vitality and cultural appreciation.";

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
            <FontAwesome6 name="vest" size={100} color={themeColors.bgDark} />
          </View>
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            Convocation Attire
          </Text>
        </View>

        <View className="px-4 space-y-2 flex-1 flex-col items-center">
          <ReactNativeZoomableViewWithGestures
            maxZoom={30}
            contentWidth={width * 0.9}
            contentHeight={height * 0.3}
            style={{ height: height * 0.3 }}
            initialZoom={0.5}
          >
            <Image
              source={require("~/assets/attire.png")}
              style={{
                borderColor: themeColors.bgDark,
                borderWidth: 2,
              }}
            />
          </ReactNativeZoomableViewWithGestures>
          <Text className="text-xs text-gray-500">Pinch To Zoom</Text>
          <Text className="text-gray text-lg p-4">{s1}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
