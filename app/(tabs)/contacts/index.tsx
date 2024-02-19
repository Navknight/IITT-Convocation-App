import { FontAwesome6 } from "@expo/vector-icons";
import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity,
  Linking,
} from "react-native";

import { contributors } from "~/constants";
import { themeColors } from "~/themes";

const ios = Platform.OS === "ios";
const { width, height } = Dimensions.get("window");

function Contributer(props) {
  return (
    <View
      style={{
        borderRadius: 10,
        height: ios ? height * 0.3 : height * 0.3,
        width: width * 0.4,
        elevation: 5,
        margin: ios ? -(height * 0.08) : 15,
        backgroundColor: "white",
        borderColor: themeColors.bgDark, // Assuming themes.bgDark holds the desired color value
        borderWidth: 2, // Adjust the width as needed
        borderStyle: "solid", // You can change this to 'dashed', 'dotted', etc.
        alignItems: "center", // Center the content horizontally
        paddingTop: 20, // Adjust the gap between the image and text
      }}
    >
      <Image
        source={props.item.image}
        style={{
          height: 100,
          width: 100,
          borderRadius: 100,
        }}
      />
      <View style={{ marginTop: 10 }}>
        <Text style={{ textAlign: "center", fontSize: 20 }}>
          {props.item.name}
        </Text>
        <Text style={{ textAlign: "center", fontSize: 12, marginTop: -10 }}>
          {props.item.designation}
        </Text>
        <Text style={{ textAlign: "center" }}>{props.item.email}</Text>
      </View>
    </View>
  );
}

export default function Contacts() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar />
      <SafeAreaView className="flex-1 flex-col justify-center items-center">
        <Text className="text-3xl font-bold">Contact Info</Text>
        <TouchableOpacity
          onPress={() => Linking.openURL("mailto:convocation2024@iittp.ac.in")}
          style={{
            height: height * 0.3,
            width: width * 0.9,
            backgroundColor: themeColors.bgDark,
            elevation: 5,
            borderRadius: 10,
            margin: 20,
          }}
          className="flex-col items-center justify-center"
        >
          <FontAwesome6
            name="contact-card"
            color={themeColors.bgLight}
            size={100}
          />
          <Text className="m-5 text-xl" style={{ color: themeColors.bgLight }}>
            convocation2024@iittp.ac.in
            <FontAwesome6 name="link" />
          </Text>
        </TouchableOpacity>
      </SafeAreaView>
    </ScrollView>
  );
}
