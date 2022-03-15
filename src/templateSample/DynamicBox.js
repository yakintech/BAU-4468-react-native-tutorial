import React from 'react'
import { View, Text } from 'react-native'
import { boxStyle, boxSubTitleStyles, boxTitleStyles } from './Boxstyle'

const DynamicBox = (props) => {


    return (
        <View style={[boxStyle, { backgroundColor: props.bColor }]}>
            <Text style={boxTitleStyles}>{props.title}</Text>
            <Text style={boxSubTitleStyles}>{props.subTitle}</Text>
        </View>
    )

}

export default DynamicBox
