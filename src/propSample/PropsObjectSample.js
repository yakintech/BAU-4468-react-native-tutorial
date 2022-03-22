import React from 'react'
import { View, Text } from 'react-native'

const PropsObjectSample = (props) => {

    console.log('PROPS', props);

    return (
        <View>
            <Text>Name: {props.webUser.name}</Text>
            <Text>Surname: {props.webUser.surname}</Text>
            <Text>City: {props.webUser.address.city}</Text>
        </View>
    )
}

export default PropsObjectSample
