import React from 'react'
import { View, Text } from 'react-native'
import { boxStyle, boxSubTitleStyles, boxTitleStyles } from './Boxstyle'


const HeadFace = () => {
    return (
        <View style={[boxStyle, { backgroundColor: '#CC7463'}]}>
            <Text style={boxTitleStyles}>Head / Face</Text>
            <Text style={boxSubTitleStyles}>11 diseases</Text>
        </View>
    )
}

export default HeadFace
