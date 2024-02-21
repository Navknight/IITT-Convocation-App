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
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { themeColors } from "../../../themes/index";

import { ConvocationProgram } from "~/constants";

const ios = Platform.OS == "ios";

const Table = ({ jsonData }) => {
  console.log(jsonData);
  return (
    <View style={styles.container}>
      {/* Table header */}
      <View style={styles.row}>
        <Text style={[styles.headerCell, { width: "25%" }]}>Role</Text>
        <Text style={[styles.headerCell, { width: "75%", flex:1 }]}>Name</Text>
      </View>

      {/* Table rows */}
      {jsonData.map((item, index) => (
        <View key={index} style={[styles.row]}>
          <Text style={[styles.cell, { width: "25%" }]}>{item["role"]}</Text>
          <Text style={[styles.cell, { width: "75%", flex:1 }]}>{item["name"]}</Text>
        </View>
      ))}
    </View>
  );
};

export default function Landing() {
  const params = useLocalSearchParams();
  const id = Number(params.id);
  const data = ConvocationProgram.find((item) => item.id === id);
  const jsonData = data.json;
  console.log(jsonData);

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
        {Object.keys(jsonData).map((category) => (
          <View key={category}>
            <Text className="text-black text-2xl text-center mt-5 font-bold">{category}</Text>

            <Table jsonData={jsonData[category]} />
          </View>
        ))}
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    // backgroundColor: "#fff",
    borderRadius: 10,
    margin: 10,
    backgroundColor: themeColors.bgDark,
  },
  row: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
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
