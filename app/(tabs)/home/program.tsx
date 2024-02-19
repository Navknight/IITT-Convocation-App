import { FontAwesome6 } from "@expo/vector-icons";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";

const data = [
  { time: '15:00 hrs', program: 'Academic Procession proceeds to the dais' },
  { time: '15:05 hrs', program: 'Invocation' },
  { time: '15:07 hrs', program: 'Chairman declares the Convocation open' },
  { time: '15:08 hrs', program: "Welcome Address and Director's Report" },
  { time: '15:23 hrs', program: 'Address by the Chairman Board of Governors' },
  { time: '15:33 hrs', program: 'Convocation Address by the Chief Guest' },
  { time: '15:48 hrs', program: 'Award of degrees by the Director' },
  { time: '16:53 hrs', program: 'Award of prizes by the Chief Guest' },
  { time: '17:08 hrs', program: 'Pledge by the degree recipients' },
  { time: '17:10 hrs', program: 'Chairman signs the record of degrees and declares the Convocation closed' },
  { time: '17:12 hrs', program: 'National Anthem' },
  { time: '17:14 hrs', program: 'Academic Procession departs' }
];

export function Table() {
  return (
    <View className="mt-5" style={styles.container}>
      {/* Table header */}
      <View style={styles.row}>
        <Text style={[styles.headerCell, { width: "20%" }]}>Time</Text>
        <Text style={[styles.headerCell, { width: "80%", flex: 1 }]}>Programme</Text>
      </View>

      {/* Table rows */}
      {data.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={[styles.cell, { width: "20%" }]}>{item["time"]}</Text>
          <Text style={[styles.cell, { width: "80%", flex: 1 }]}>{item["program"]}</Text>
        </View>
      ))}
    </View>
  );
}

export default function Landing() {
  const ios = Platform.OS === "ios";
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
            <FontAwesome6
              name="table-list"
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
            Convocation Programme
          </Text>
        </View>


        <Table />
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: themeColors.bgLight,
    borderRadius: 10,
    margin: 10,
    backgroundColor: themeColors.bgDark,
    color: themeColors.bgLight,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: themeColors.bgLight,
    paddingVertical: 5,
  },
  headerCell: {
    // flex: 1,
    fontWeight: "bold",
    textAlign: "center",
    margin: 5,
    color: themeColors.bgLight,
  },
  cell: {
    // flex: 1,
    textAlign: "center",
    margin: 5,
    color: themeColors.bgLight,
  },
});
