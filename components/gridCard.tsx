import { FontAwesome6 } from "@expo/vector-icons";
import { faVest } from "@fortawesome/free-solid-svg-icons"; // Import the vest icon
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { useRouter } from "expo-router";
import React from "react";
import {
  View,
  Text,
  Dimensions,
  Platform,
  TouchableOpacity,
} from "react-native";
import {
  AcademicCapIcon as Cap,
  FilmIcon as Film,
  QueueListIcon as Queue,
} from "react-native-heroicons/solid";

import { themeColors } from "../themes/index";

interface Props {
  id: number;
  title: string;
  image: string;
  link: string;
  index: number;
  list: string;
}

export default function GridCard(props: Props) {
  const { width, height } = Dimensions.get("window");
  const ios = Platform.OS == "ios";
  const router = useRouter();

  return (
    <TouchableOpacity
      onPress={
        props.image == "film"
          ? () =>
              router.push({
                pathname: "/home/stream",
                params: { link: props.link },
              })
          : () =>
              router.push({
                pathname: "/home/landing",
                params: { list: props.list, index: props.index },
              })
      }
    >
      <View
        style={{
          borderRadius: 10,
          backgroundColor: themeColors.bgDark,
          height: ios ? height * 0.15 : height * 0.2,
          width: width * 0.42,
          margin: 7,
        }}
        className="flex-col items-center justify-center"
      >
        <FontAwesome6
          name={`${props.image}`}
          size={50}
          color={themeColors.bgLight}
        />
        <Text className="text-white mt-5 text-base">{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
}
