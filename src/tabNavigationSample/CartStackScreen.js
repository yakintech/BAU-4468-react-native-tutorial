import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const CartStack = createNativeStackNavigator();


const CartStackScreen = () => {
    return (
        <CartStack.Navigator>
            <CartStack.Screen  name="CartScreen" component={CartScreen} />
        </CartStack.Navigator>
    )
}

const CartScreen = () => {
    return (
        <View>
            <Text>Cart Page</Text>
        </View>
    )
}



export default CartStackScreen
