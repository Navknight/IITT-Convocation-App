import { View, Text, Image, ScrollView, Platform } from 'react-native';
import React, { useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { themeColors } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { mainGrid, mainList } from '../constants';
import GridCard from '../components/gridCard';
import CoffeeCard from '../components/coffeeCard';

const ios = Platform.OS == 'ios';

export default function HomeScreen() {
	return (
		<ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
			<StatusBar />
			<SafeAreaView className={ios ? '-mb-8' : ''}>
				<View style={{ alignItems: 'center', marginHorizontal: 16 }}>
					<Image source={require('../assets/IITT-logo.jpeg')} style={{ height: 100, width: 150 }} />
					<Text>4th and 5th (Joint) Convocation</Text>
					<Text>22nd February 2024</Text>
				</View>
			</SafeAreaView>

            
		</ScrollView>
	);
}
