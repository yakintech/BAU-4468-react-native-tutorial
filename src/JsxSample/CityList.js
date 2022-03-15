import React from 'react'
import { View, Text } from 'react-native'

const CityList = () => {

    var cities = ['İstanbul', 'İzmir', 'Ankara', 'Trabzon', 'Aydın'];


    return (
        <View>
            {
                cities.map((item,key) => {
                    return <Text>{item}</Text>
                })
            }
        </View>
    )
}

export default CityList
