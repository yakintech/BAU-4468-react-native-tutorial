import React from 'react'
import { View, Text } from 'react-native'
import { boxStyle, boxSubTitleStyles, boxTitleStyles } from './Boxstyle'

const Elbow = () => {
    return (
        <View style={[boxStyle,{ backgroundColor: '#D7952D' }]}>
            <Text style={boxTitleStyles}>Elbow / Neck</Text>
            <Text style={boxSubTitleStyles}>11 diseases</Text>
        </View>
    )
}

export default Elbow
