import React from 'react'
import { View, Text } from 'react-native'

const UserDetail = () => {

    var user = {
        name: "Çağatay",
        surname : "Yıldız",
        address: {
            city: "İstanbul",
            street: "Valideçeşme"
        }
    }


    return (
        <View>
            <Text>User Name: {user.name}</Text>
            <Text>User Surname: {user.surname}</Text>
            <Text>Address: {user.address.city}</Text>
        </View>
    )
}

export default UserDetail
