import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const HomeStack = createNativeStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen  name="HomeScreen" component={HomeScreen} />
    </HomeStack.Navigator>
  );
}


const HomeScreen = () => {
    return (
        <View>
            <Text>Home Page</Text>
        </View>
    )
}



export default HomeStackScreen
