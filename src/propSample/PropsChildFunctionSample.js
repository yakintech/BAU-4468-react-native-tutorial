import React from 'react'
import { View, Text, Button } from 'react-native'

const PropsChildFunctionSample = (props) => {
    return (
        <View>
            <Text>Child Component</Text>
            <Button onPress={() => props.childFunc("Çağatay","Yıldız")} title='Child Component Button'></Button>
        </View>
    )
}

export default PropsChildFunctionSample
