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
				width: width * 0.9,
			}}
		>
			<View
				style={{
					shadowColor: 'black',
					shadowRadius: 30,
					shadowOffset: { width: 0, height: 40 },
					shadowOpacity: 0.8,
					marginTop: ios ? -(height * 0.08) : 15,
				}}
				className="flex-row justify-center">
				<Image
					source={item.image}
					className="h-32 w-32 rounded-full"
				/>
				<Text className="text-lg text-white font-semibold z-10">
					{item.name}
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
						}} className="p-4 bg-white rounded-full">
						<PlusIcon size="25" strokeWidth={2} color={themeColors.bgDark} />
					</TouchableOpacity>
				</View>
			</View>
		</View>

	)
}