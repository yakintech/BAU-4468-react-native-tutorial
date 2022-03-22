import React from 'react'
import { View, Text, Button } from 'react-native'
import PropsChildFunctionSample from './PropsChildFunctionSample'

const PropsFunctionSample = (props) => {

    const clickButton = () => {

        props.myFunc('Çağatay')

    }

    return (
        <View>
            <Text></Text>
            <Button onPress={() => clickButton()} title='Click!'></Button>

            <PropsChildFunctionSample childFunc={props.myFunc2}></PropsChildFunctionSample>
        </View>
    )
}

export default PropsFunctionSample
