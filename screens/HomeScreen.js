import { View, Text, Image, ScrollView, Platform } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { themeColors } from "../theme";
import { StatusBar } from "expo-status-bar";
import { mainGrid, mainList } from "../constants";
import GridCard from "../components/gridCard";
import CoffeeCard from "../components/coffeeCard";


const ios = Platform.OS == "ios";

export default function HomeScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar />
      <SafeAreaView className={ios ? "-mb-8" : ""}>
        <View
          style={{
            alignItems: "center",
            marginHorizontal: 16,
            marginBottom: 16,
          }}
        >
          <Image
            source={require("../assets/IITT-logo.jpeg")}
            style={{ height: 100, width: 150 }}
          />
          <Text>4th and 5th (Joint) Convocation</Text>
          <Text>22nd February 2024</Text>
        </View>
      </SafeAreaView>

			{/* Main Content */}
			<View style={{ paddingHorizontal: 20, paddingTop: 20, flexDirection: 'row', flexWrap: 'wrap', marginBottom: '10'}}>
				{mainGrid.map((item, index) => (
					<View key={item.id} style={{ width: '50%' }}>
						<GridCard item={item} />
					</View>
				))}
			</View>

      {/* List of other tabs */}
      <View className="flex-col items-center justify-center w-full">
        {mainList.map((item) => (
          <CoffeeCard key={item.id} item={item} style={{ marginBottom: 16 }} />
        ))}
      </View>
    </ScrollView>
  );
}
