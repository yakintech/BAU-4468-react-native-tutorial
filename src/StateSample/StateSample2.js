import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const StateSample2 = () => {

    const [loading, setLoading] = useState(true)

    return (
        <View>
           {
               loading == true ? <Text>Loading...</Text> : <Text>Dashboard Page</Text>
           }

           <Button onPress={() => setLoading(false)} title='Change Status'></Button>
        </View>
    )
}

export default StateSample2
