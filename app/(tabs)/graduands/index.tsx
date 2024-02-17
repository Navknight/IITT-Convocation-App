/* eslint-disable prettier/prettier */
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { FontAwesome6 } from '@expo/vector-icons';
import { View, ScrollView, StatusBar, SafeAreaView, FlatList, Text, Platform, Dimensions, Pressable } from "react-native";

import { graduands } from "~/constants";
import { themeColors } from "~/themes/index";
import { router } from "expo-router";
const ios = Platform.OS === 'ios';
const { width, height } = Dimensions.get("window")
function Contributer(props) {

    return (
        <Pressable
            onPress={() => router.push({pathname: "graduands/graduandsPage", params:{list: props.item.name}})}
        >
            <View
                style={{
                    borderRadius: 10,
                    // height:  height * 0.2,
                    minHeight: height*0.2,
                    width: width * 0.42,
                    elevation: 5,
                    margin: ios ? -(height * 0.08) : 10,
                    backgroundColor: "white",
                    borderColor: themeColors.bgDark, // Assuming themes.bgDark holds the desired color value
                    borderWidth: 2, // Adjust the width as needed
                    borderStyle: "solid", // You can change this to 'dashed', 'dotted', etc.
                    padding: 10, // Adjust the gap between the image and text
                }}
                className="flex-col items-center justify-center"
            >
                <FontAwesome6 name={`${props.item.image}`} size={50} color={themeColors.bgDark} />
                <View style={{ marginTop: 5 }}>
                    <Text style={{ textAlign: "center"}} className="text-lg">
                        {props.item.name}
                    </Text>
                </View>
            </View>
        </Pressable>
    );
}

export default function Graduands() {
    return (
        <View style={{ flex: 1, backgroundColor: "white" }}>
            <StatusBar />
            <SafeAreaView className="flex-1 flex-col justify-center items-center">
                <FlatList
                    numColumns={2}
                    data={graduands}
                    renderItem={(item) => <Contributer {...item} />}
                    keyExtractor={(item) => item.id}
                />
            </SafeAreaView>
        </View>
    );
}
