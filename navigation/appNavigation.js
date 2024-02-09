import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import { Dimensions, LogBox, Platform, Text, View } from 'react-native';
import ProductScreen from '../screens/ProductScreen';
import { themeColors } from '../theme';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeIcon as HomeOutline, InformationCircleIcon as InfoOutline, FilmIcon as StreamOutline, IdentificationIcon as ContactOutline} from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, InformationCircleIcon as InfoSolid, FilmIcon as StreamSolid, IdentificationIcon as ContactSolid} from 'react-native-heroicons/solid';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const ios = Platform.OS == 'ios';
LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        contentStyle: {backgroundColor: 'white'}
      }}>
        <Stack.Screen name="Home" options={{headerShown: false}} component={HomeTabs} />
        <Stack.Screen name="Product" options={{headerShown: false}} component={ProductScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
  
}

function HomeTabs(){
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom: 20,
          height: 75,
          alignItems: 'center',
          
          borderRadius: 100,
          marginHorizontal: 20,
          backgroundColor: themeColors.bgLight,

        },
        tabBarItemStyle: {
          marginTop: ios? 30: 0,
          
        }
      })}
      
      >
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="information" component={HomeScreen} />
      <Tab.Screen name="stream" component={HomeScreen} />
      <Tab.Screen name="contact" component={HomeScreen} />
    </Tab.Navigator>
  )
}

const menuIcons = (route, focused)=> {
  let icon;
  

  if (route.name === 'home') {
    icon =  focused? <HomeSolid size="30" color={themeColors.bgLight} /> : <HomeOutline size="30" strokeWidth={2} color="white" />
  } else if (route.name === 'information') {
    icon =  focused? <InfoSolid size="30" color={themeColors.bgLight} /> : <InfoOutline size="30" strokeWidth={2} color="white" />
  }else if(route.name==='stream'){
    icon =  focused? <StreamSolid size="30" color={themeColors.bgLight} /> : <StreamOutline size="30" strokeWidth={2} color="white" />
  } else if(route.name==='contact'){
    icon =  focused? <ContactSolid size="30" color={themeColors.bgLight} /> : <ContactOutline size="30" strokeWidth={2} color="white" />
  }

  
  let buttonClass = focused? "bg-white": "";
  return (
    <View className={"flex items-center rounded-full p-3 shadow " + buttonClass}>
      {icon}
    </View>
  )
}