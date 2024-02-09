import { View, Text, Image, TouchableOpacity, TextInput, FlatList, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { themeColors } from '../theme';
import { StatusBar } from 'expo-status-bar';
import { categories, coffeeItems } from '../constants';
import CoffeeCard from '../components/coffeeCard';
import GridCard from '../components/gridCard';

const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';
export default function ContactUS() {
	const [activeCategory, setActiveCategory] = useState(1);

	return (
		<View className="flex-1 relative bg-white">
			<StatusBar />

			{/* <Image 
        source={require('../assets/images/beansBackground1.png')} 
        style={{height: height*0.2}} 
        className="w-full absolute -top-5 opacity-10" /> */}
			<SafeAreaView className={ios ? '-mb-8' : ''}>
				<View className="mx-4 flex-col items-center justify-center ">
					<Image source={require('../assets/IITT-logo.jpeg')} className="h-20 w-32" />
					<Text>4th and 5th (Joint) Convocation</Text>
					<Text>22nd February 2024</Text>
				</View>

			</SafeAreaView>
		

{/* coffee cards */}
<View className={`overflow-visible flex justify-center flex-1 ${ios ? 'mt-10' : ''}`}>
<View>
    <Carousel
        containerCustomStyle={{ overflow: 'visible' }}
        data={coffeeItems}
        renderItem={({ item }) => <CoffeeCard item={item} />}
        firstItem={1}
        loop={true}
        inactiveSlideScale={0.75}
        inactiveSlideOpacity={0.75}
        sliderWidth={width}
        itemWidth={width * 0.63}
        slideStyle={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }} // Change flexDirection to 'row'
    />
</View>
	</View>

		

		</View>
	)
}
