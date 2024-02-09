import React from 'react'
import { View, Text, Dimensions, Platform } from 'react-native';
import { themeColors } from '../theme';


export default function GridCard() {
    const {width, height} = Dimensions.get('window');
    const ios = Platform.OS == 'ios';
    return (
        <View style={{
            borderRadius: 40,
            backgroundColor: themeColors.bgDark,
            height: ios? height*0.15 : height*0.20,
            width: width*0.45
        }}>
            <Text>GridCard</Text>
        </View>
    )
}