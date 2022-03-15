import React from 'react'
import { View, Text } from 'react-native'

const Content = () => {

    var name = "Çağatay";
    var surname = "Yıldız";

    //one way binding

    return (
        <View>
            <Text>Content is here!</Text>
            <Text>{name}</Text>
            <Text>{surname}</Text>
        </View>
    )
}

export default Content
