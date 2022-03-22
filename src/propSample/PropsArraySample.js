import React from 'react'
import { View, Text } from 'react-native'

const PropsArraySample = (props) => {

    console.log('Metal Bands', props.metals);

    console.log('Year', props.year);

    return (
        <View>
            {
                props.metals.map((item,key) => {
                    return <Text>{item}</Text>
                })
            }
        </View>
    )
}

export default PropsArraySample
