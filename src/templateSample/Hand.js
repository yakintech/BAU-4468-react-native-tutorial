import React from 'react'
import { View, Text } from 'react-native'
import { boxStyle, boxSubTitleStyles, boxTitleStyles } from './Boxstyle'


const Hand = () => {
    return (
        <View style={[boxStyle,{ flex: 2, backgroundColor: '#48687A' }]}>
            <Text style={boxTitleStyles}>Hand / Arm</Text>
            <Text style={boxSubTitleStyles}>11 diseases</Text>
        </View>
    )
}

export default Hand
