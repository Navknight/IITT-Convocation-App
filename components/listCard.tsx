import { FontAwesome6 } from "@expo/vector-icons";
import { router, useNavigation } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Dimensions,
  Platform,
} from "react-native";
import { PlusIcon } from "react-native-heroicons/outline";

import { themeColors } from "../themes/index";

interface Props {
  title: string;
  image: string;
  icon: string;
  desc: string;
  link: string;
  id: number;
}

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";
export default function ListCard(props: Props) {
  return (
    <TouchableOpacity
      onPress={() => {
        router.push({
          pathname: props.link,
          params: { speechType: props.speechType, id: props.id },
        });
      }}
      className="p-1 rounded-full"
    >
      <View
        style={{
          borderRadius: 10,
          minHeight: height * 0.2,
          width: width * 0.88,
          elevation: 5,
          marginTop: ios ? -(height * 0.08) : 15,
          backgroundColor: "white",
          borderColor: themeColors.bgDark, // Assuming themes.bgDark holds the desired color value
          borderWidth: 2, // Adjust the width as needed
          borderStyle: "solid", // You can change this to 'dashed', 'dotted', etc.
        }}
        className="flex-row items-center"
      >
        {props.image ? (
          <Image source={props.image} className="h-32 w-32 rounded-full m-5" />
        ) : (
          <View
            className="flex-col justify-center items-center w-32 h-32 m-5"
            style={{ backgroundColor: themeColors.bgDark, borderRadius: 100 }}
          >
            <FontAwesome6
              name={props.icon}
              size={50}
              color={themeColors.bgLight}
            />
          </View>
        )}
        <View className="flex-col items-center justify-between flex-1 p-3 pt-6 gap-y-2">
          <Text className="text-lg text-black font-semibold z-10">
            {props.title}
          </Text>
          <Text className="test-sm text-black font-normal z-10">
            {props.desc.slice(0, 80) + "..."}
          </Text>
          <View
            style={{
              backgroundColor: ios ? themeColors.bgDark : "transparent",
            }}
            className="flex-row justify-between items-center mb-5"
          />
        </View>
      </View>
    </TouchableOpacity>
  );
}
