import React, { useState, useEffect } from 'react'
import { View, Text, Button } from 'react-native'

const EffectSample = () => {

    const [number, setNumber] = useState(0);

    console.log('Effect Sample component rendered!!');


    useEffect(() => {

        console.log('Use effect RUN!!');

    }, [])

    return (
        <View>
            <Text style={{fontSize:40,fontWeight:'bold'}}>{number}</Text>
            <Button title='Incrase Number' onPress={() => setNumber(number + 1)}></Button>
        </View>
    )
}

export default EffectSample
