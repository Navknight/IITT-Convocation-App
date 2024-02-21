import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Dimensions,
  Platform,
  ScrollView,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";

import { awardData } from "~/constants";
const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

function Card({ props }) {
  return (
    <View
      style={{
        borderRadius: 10,
        minHeight: height * 0.4,
        width: width * 0.8,
        elevation: 5,
        margin: 15,
        backgroundColor: "white",
        borderColor: themeColors.bgDark, // Assuming themes.bgDark holds the desired color value
        borderWidth: 2, // Adjust the width as needed
        borderStyle: "solid", // You can change this to 'dashed', 'dotted', etc.
        alignItems: "center", // Center the content horizontally
        padding: 20, // Adjust the gap between the image and text
      }}
    >
      <Image
        source={props.Image}
        style={{
          height: 150,
          width: 150,
          borderRadius: 100,
          borderColor: themeColors.bgDark,
          borderWidth: 2,
        }}
      />
      <View style={{ marginTop: 10 }}>
        <Text className="text-center text-2xl font-bold m-3">
          {props.Award}
        </Text>
        <Text className="text-2xl m-2 text-center">{props.Name.toUpperCase()}</Text>
        <Text className="text-xl m-2 text-center">{props.Details}</Text>
      </View>
    </View>
  );
}

export default function Award() {
  const data = awardData;
  const [cards, setCards] = useState("2023");
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

        <View>
          <View className="flex-row items-center justify-around mt-10 mr-10 ml-10 gap-2">
            <Pressable
              style={{
                backgroundColor:
                  cards === "2022" ? themeColors.bgDark : themeColors.bgLight,
                flex: 1,
                borderRadius: 10,
                borderColor: themeColors.bgDark,
                borderWidth: 2,
              }}
              onPress={() => setCards("2022")}
            >
              <Text
                style={{
                  color:
                    cards === "2022" ? themeColors.bgLight : themeColors.bgDark,
                }}
                className="text-center text-bold text-3xl"
              >
                2022
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor:
                  cards === "2023" ? themeColors.bgDark : themeColors.bgLight,
                flex: 1,

                borderRadius: 10,
                borderColor: themeColors.bgDark,
                borderWidth: 2,
              }}
              onPress={() => setCards("2023")}
            >
              <Text
                style={{
                  color:
                    cards === "2023" ? themeColors.bgLight : themeColors.bgDark,
                }}
                className="text-bold text-3xl text-center"
              >
                2023
              </Text>
            </Pressable>
          </View>
          <View className="flex-col items-center justify-center">
            {Object.keys(data).map((category) => {
              return data[cards].map((item, index) => {
                return <Card key={index} props={item} />;
              });
            })}
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
