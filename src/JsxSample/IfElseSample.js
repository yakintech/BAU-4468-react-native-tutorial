import React from 'react'
import { View, Text } from 'react-native'

const IfElseSample = () => {

    var adminUser = {
        name: "Çağatay",
        surname: 'Yıldız',
        onlineStatus: true
    }

    return (
        <View>

        {
            adminUser.onlineStatus == true ? <Text>User is online!</Text> : <Text>User is offline!</Text>
        }
        </View>
    )
}

export default IfElseSample
