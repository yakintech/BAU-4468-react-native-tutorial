import React from 'react'
import { View, Text, Button } from 'react-native'

const HomeScreen = ({navigation}) => {


    return (
        <View>
            <Text>Home Screen</Text>
            <Button title='Go to User Screen!!' onPress={() => navigation.navigate('User')}></Button>
        </View>
    )
}

export default HomeScreen
