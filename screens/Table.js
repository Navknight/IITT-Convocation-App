import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  Platform,
  StyleSheet,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowLeftCircleIcon } from "react-native-heroicons/outline";
import { themeColors } from "../theme";

const { width, height } = Dimensions.get("window");
const ios = Platform.OS == "ios";

export default function TableScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState("small");
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Image
        source={require("../assets/images/BackGroundIIT.png")}
        style={{
          height: 300,
          borderBottomLeftRadius: 50,
          borderBottomRightRadius: 50,
          width: "100%",
          position: "absolute",
        }}
      />
      <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
        <View
          style={{
            paddingHorizontal: 20,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{ borderRadius: 999, overflow: "hidden" }}
          >
            <ArrowLeftCircleIcon size={50} strokeWidth={1.2} color="white" />
          </TouchableOpacity>
        </View>

        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "white", fontSize: 24, fontWeight: "bold" }}>
            Table Screen
          </Text>
        </View>

        {/* Table */}
        <View style={styles.tableContainer}>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Column 1</Text>
            <Text style={styles.tableCell}>Column 2</Text>
            <Text style={styles.tableCell}>Column 3</Text>
          </View>
          {/* Dummy Rows */}
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Row 1, Cell 1</Text>
            <Text style={styles.tableCell}>Row 1, Cell 2</Text>
            <Text style={styles.tableCell}>Row 1, Cell 3</Text>
          </View>
          <View style={styles.tableRow}>
            <Text style={styles.tableCell}>Row 2, Cell 1</Text>
            <Text style={styles.tableCell}>Row 2, Cell 2</Text>
            <Text style={styles.tableCell}>Row 2, Cell 3</Text>
          </View>
          {/* Add more rows as needed */}
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  tableContainer: {
    marginTop: 200,
    marginHorizontal: 20,
    flexDirection: "column", // Change to column for vertical stacking
    backgroundColor: "white",
    padding: 10,
    borderRadius: 10,
    shadowColor: themeColors.bgDark,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.5,
    elevation: 5,
  },
  tableRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomWidth: 1,
    borderBottomColor: "lightgray",
    paddingVertical: 5,
  },
  tableCell: {
    flex: 1,
    textAlign: "center",
  },
});
