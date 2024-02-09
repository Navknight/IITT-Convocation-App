import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Dimensions, Platform } from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import { useNavigation } from '@react-navigation/native'
import { StarIcon } from 'react-native-heroicons/solid';
import { PlusIcon } from 'react-native-heroicons/outline';
const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function CoffeeCard({ item }) {
	const navigation = useNavigation();
	return (

		<View
			style={{
				borderRadius: 40,
				backgroundColor: themeColors.bgDark,
				height: ios ? height * 0.2 : height * 0.2,
				width: width * 0.88,
				shadowColor: 'black',
				shadowRadius: 30,
				shadowOffset: { width: 0, height: 40 },
				shadowOpacity: 0.3,
				elevation:5,
				marginTop: ios ? -(height * 0.08) : 15,
			}}
			className="flex-row items-center">
			<Image
				source={item.image}
				className="h-32 w-32 rounded-full m-5"
			/>
			<View className="flex-col items-center justify-between flex-1 p-3 pt-6 gap-y-2">
				<Text className="text-lg text-white font-semibold z-10">
					{item.title}
				</Text>
				<Text className="test-sm text-white font-normal z-10">
					{item.desc.slice(0, 80) + '...'}
				</Text>
				<View style={{
					backgroundColor: ios ? themeColors.bgDark : 'transparent',
					shadowColor: themeColors.bgDark,
					shadowRadius: 25,
					shadowOffset: { width: 0, height: 40 },
					shadowOpacity: 0.8,
				}} className="flex-row justify-between items-center mb-5">
					<TouchableOpacity
						onPress={() => navigation.navigate('Product', { ...item })}
						style={{
							shadowColor: 'black',
							shadowRadius: 40,
							shadowOffset: { width: -20, height: -10 },
							shadowOpacity: 1,
						}} className="p-1 bg-white rounded-full">
						<PlusIcon size="15" strokeWidth={4} color={themeColors.bgDark} />
					</TouchableOpacity>
				</View>
			</View>

		</View>

	)
}