import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const StateSample = () => {

    const [name, setName] = useState('Çağatay');

    // let name = "Çağatay";

    console.log('State sample component rendered!');

    const changeName = () => {
        // name = 'Bahçeşehir';

        setName('Bahçeşehir');

    }

    return (
        <View>
            <Text style={{fontSize:60, fontWeight:'bold'}}>{name}</Text>
            <Button title='Change Name' onPress={() => changeName()}></Button>
        </View>
    )
}

export default StateSample
