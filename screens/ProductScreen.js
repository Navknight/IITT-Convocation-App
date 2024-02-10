import { View, Text, TouchableOpacity, Image, Dimensions, Platform } from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowLeftCircleIcon, MinusIcon, PlusIcon } from 'react-native-heroicons/outline';
import { HeartIcon, StarIcon } from 'react-native-heroicons/solid';
import { themeColors } from '../theme';
import { ShoppingBag } from 'react-native-feather';
const { width, height } = Dimensions.get('window');
const ios = Platform.OS == 'ios';


export default function FavouriteScreen(props) {
  const item = props.route.params;
  const [size, setSize] = useState('small');
  const navigation = useNavigation();
  return (
    <View className="flex-1">
      <StatusBar style="light" />
      <Image
        source={require('../assets/images/BackGroundIIT.png')}
        style={{ height: 300, borderBottomLeftRadius: 50, borderBottomRightRadius: 50 }}
        className="w-full absolute" />
      <SafeAreaView className="space-y-4 flex-1">
        <View className="mx-4 flex-row justify-between items-center">
          <TouchableOpacity className=" rounded-full " onPress={() => navigation.goBack()}>
            <ArrowLeftCircleIcon size="50" strokeWidth={1.2} color="white" />
          </TouchableOpacity>
        </View>
        <View
          className="flex-row justify-center">
          <Image source={item.image} className="h-60 w-60 rounded-full overflow-hidden shadow-lg" style={{ marginTop: ios ? 0 : 40 }} />
        </View>

        <View className="px-4 flex-row justify-between items-center">
          <Text style={{ color: themeColors.text }} className="text-3xl font-semibold">
            {item.name}
          </Text>

        </View>


        <View className="px-4 space-y-2">
          <Text className="text-gray-600">
            {item.desc}
          </Text>
        </View>




      </SafeAreaView>



    </View>
  )
}