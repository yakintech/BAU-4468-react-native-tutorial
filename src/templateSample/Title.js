import React from 'react'
import { View, Text } from 'react-native'

const Title = () => {
    return (
        <View style={{ flex: 2 }}>
            <Text style={{
                fontSize: 40,
                fontWeight: "bold"
            }}>Learn</Text>
            <Text>Choose the part of the body</Text>
        </View>
    )
}

export default Title
