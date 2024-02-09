import { View, Text, Image, FlatList, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { mainGrid } from '../constants';
import GridCard from '../components/gridCard';
const ios = Platform.OS == 'ios';
export default function HomeScreen() {

	return (
		<View className="flex-1 relative bg-white">
			<StatusBar />
			<SafeAreaView className={ios ? '-mb-8' : ''}>
				<View className="mx-4 flex-col items-center justify-center ">
					<Image source={require('../assets/IITT-logo.jpeg')} className="h-20 w-32" />
					<Text>4th and 5th (Joint) Convocation</Text>
					<Text>22nd February 2024</Text>
				</View>

			</SafeAreaView>
			{/*Four Main Options*/}
			<View style={{ flex: 1, backgroundColor: 'white' }}>
				<FlatList
					data={mainGrid}
					renderItem={({ item }) => <GridCard item={item} />}
					keyExtractor={(item) => item.id.toString()}
					numColumns={2} // Set the number of columns
					contentContainerStyle={{ paddingHorizontal: 20, paddingTop: 20, justifyContent: 'space-between'}}
				/>
			</View>

		</View>
	)
}
