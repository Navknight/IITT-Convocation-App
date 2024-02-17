import { FontAwesome6 } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
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

import { firebase_db } from "~/utils/firebase";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function Speech() {
  const [speech, setSpeech] = useState([]);
  const params = useLocalSearchParams();
  const speechType = params.speechType;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const q = query(collection(firebase_db, "Speeches"));
        const querySnapshot = await getDocs(q);
        const fetchedSpeech = [];

        querySnapshot.forEach((doc) => {
          const speech = { id: doc.id, ...doc.data() };
          if (speech.id === speechType) {
            fetchedSpeech.push(speech);
          }
        });
        console.log(speech);
        setSpeech(fetchedSpeech);
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchData();
  }, [speechType]);

  return (
    <ScrollView className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require("~/assets/backgroundiitt.jpeg")}
        style={{ height: 300 }}
        className="w-full absolute"
      />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="flex-row justify-center">
          <Image
            source={
              speechType === "Chief Guest"
                ? require("~/assets/ChiefGuest.jpg")
                : require("~/assets/Director.jpeg")
            }
            className="h-60 w-60 rounded-full overflow-hidden"
            style={{ marginTop: ios ? 0 : 100 }}
          />
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {speechType === "Chief Guest"
              ? "Chief Guest's Address"
              : "Director's Report"}
          </Text>
        </View>

        <View className="px-4 space-y-2">
          <Text className="text-gray-600 text-lg p-4">{speech[0]?.speech}</Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
