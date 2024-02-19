import { FontAwesome6 } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Platform,
  StyleSheet,
  Pressable,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";

import { graduandData } from "~/constants";

export function Table({ jsonData }) {
  return (
    <View style={styles.container}>
      {/* Table header */}
      <View style={styles.row}>
        <Text style={[styles.headerCell, { width: "9%" }]}>S.No</Text>
        <Text style={[styles.headerCell, { width: "10%" }]}>Dept.</Text>
        <Text style={[styles.headerCell, { width: "21%" }]}>Roll No.</Text>
        <Text style={[styles.headerCell, { width: "60%", flex: 1 }]}>
          Student Name
        </Text>
      </View>

      {/* Table rows */}
      {jsonData.map((item, index) => (
        <View key={index} style={styles.row}>
          <Text style={[styles.cell, { width: "9%" }]}>{item["S.No."]}</Text>
          <Text style={[styles.cell, { width: "10%" }]}>{item["Dept."]}</Text>
          <Text style={[styles.cell, { width: "21%" }]}>
            {item["Roll No."]}
          </Text>
          <Text style={[styles.cell, { width: "60%", flex: 1 }]}>
            {item["Student Name"]}
          </Text>
        </View>
      ))}
    </View>
  );
}

export default function Landing() {
  const ios = Platform.OS === "ios";
  const params = useLocalSearchParams();
  const key = params.list;
  const data = graduandData[key];
  const [table, setTable] = useState("2022");
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
              name={data.icon}
              size={100}
              color={themeColors.bgDark}
            />
          </View>
        </View>

        <View className="px-4 flex-row justify-center items-center">
          <Text
            style={{ color: themeColors.text }}
            className="text-3xl font-semibold text-center"
          >
            {key}
          </Text>
        </View>

        <View>
          <View className="flex-row items-center justify-around mt-10 mr-10 ml-10 gap-2">
            <Pressable
              style={{
                backgroundColor:
                  table === "2022" ? themeColors.bgDark : themeColors.bgLight,
                flex: 1,
                borderRadius: 10,
                borderColor: themeColors.bgDark,
                borderWidth: 2,
              }}
              onPress={() => setTable("2022")}
            >
              <Text
                style={{
                  color:
                    table === "2022" ? themeColors.bgLight : themeColors.bgDark,
                }}
                className="text-center text-bold text-3xl"
              >
                2022
              </Text>
            </Pressable>
            <Pressable
              style={{
                backgroundColor:
                  table === "2023" ? themeColors.bgDark : themeColors.bgLight,
                flex: 1,

                borderRadius: 10,
                borderColor: themeColors.bgDark,
                borderWidth: 2,
              }}
              onPress={() => setTable("2023")}
            >
              <Text
                style={{
                  color:
                    table === "2023" ? themeColors.bgLight : themeColors.bgDark,
                }}
                className="text-bold text-3xl text-center"
              >
                2023
              </Text>
            </Pressable>
          </View>
          {table === "2022" ? (
            <Table jsonData={data.four} />
          ) : (
            <Table jsonData={data.five} />
          )}
        </View>
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
