import React from 'react'
import { View, Text } from 'react-native'
import { boxStyle, boxSubTitleStyles, boxTitleStyles } from './Boxstyle'



const BackNeck = () => {
    return (

            <View style={[boxStyle,{ backgroundColor: '#8cc0b7' }]}>
                <Text style={boxTitleStyles}>Back / Neck</Text>
                <Text style={boxSubTitleStyles}>11 diseases</Text>
            </View>

    )
}

export default BackNeck
