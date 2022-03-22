import React from 'react'
import { View, Text } from 'react-native'

const PropsObjectArraySample = (props) => {

    console.log('Props', props.categoryList);

    return (
        <View>
            {
                props.categoryList.map((item, key) => {
                   return <Text>{item.name} - {item.description}</Text>
                })
            }
        </View>
    )
}

export default PropsObjectArraySample
