import React, { useEffect, useState } from 'react'
import { View, Text, Button } from 'react-native'

const EffectSample2 = () => {

    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);


    console.log('Effect Sample-2 component rendered!!');



    
    useEffect(() => {

        console.log('Use Effect - 1 worked!');

    }, [])

    useEffect(() => {

        console.log('Use Effect - 2 worked!');


    }, [number2])


    return (
        <>
            <View>
                <Text>{number}</Text>
                <Button onPress={() => setNumber(number + 1)} title='Change Number - 1'></Button>
            </View>
            <View>
            <Text>{number2}</Text>
                <Button onPress={() => setNumber2(number2 + 1)} title='Change Number - 2'></Button>
            </View>
        </>

    )
}

export default EffectSample2
