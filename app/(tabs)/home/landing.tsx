import { FontAwesome6 } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { collection, getDocs } from "firebase/firestore";
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

import * as lists from "~/constants/index";
import { firebase_db } from "~/utils/firebase";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function Landing() {
  const toUse = useLocalSearchParams();
  const item = lists[toUse.list][toUse.index];
  console.log("landing")

  const [data, setData] = useState([]);

  useEffect(() => {
    if (item.online) {
      const fetchData = async () => {
        try {
          const querySnapshot = await getDocs(
            collection(firebase_db, item.collection),
          );
          const fetchedData = [];
          querySnapshot.forEach((doc) => {
            fetchedData.push({ id: doc.id, ...doc.data() });
          });
          setData(fetchedData);
          console.log(fetchedData);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, []);

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
          {item.image !== "" ? (
            <Image
              source={item.image}
              className="h-60 w-60 rounded-full overflow-hidden"
              style={{ marginTop: ios ? 0 : 100 }}
            />
          ) : (
            <FontAwesome6 name={item.icon} />
          )}
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold"
          >
            {item.name}
          </Text>
        </View>

        <View className="px-4 space-y-2">
          <Text className="text-gray-600 text-lg p-4">
            {item.online? data.find((dic) => dic.id == item.document).speech : item.desc}
          </Text>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
