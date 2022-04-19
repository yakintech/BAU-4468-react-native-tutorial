import React, { useContext } from 'react'
import { View, Text, Button } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import cartContext from '../store/cartContext';
import { storeCart } from '../helper/storageHelper';

const CartStack = createNativeStackNavigator();


const CartStackScreen = () => {
    return (
        <CartStack.Navigator>
            <CartStack.Screen name="CartScreen" component={CartScreen} />
        </CartStack.Navigator>
    )
}

const CartScreen = () => {

    const { cart, setCart } = useContext(cartContext)

    let totalPrice = 0;
    cart.forEach(element => {
        totalPrice = totalPrice + (element.quantity * element.price);
    });


    const removeItem = (item) => {

        //"Delete" function
        let filteredCartItems = cart.filter(q => q.id != item.id);
        setCart([...filteredCartItems])
        storeCart([...filteredCartItems])

    }


    const emptyCart = () => {

        setCart([]);
        storeCart([]);

    }

    return (
        <View>
            {
                cart.length == 0 ? <Text>Cart is empty</Text> : <>
                    <Text style={{ fontSize: 30 }}>Total: {totalPrice.toFixed(2)}</Text>
                    {
                        cart && cart.map((item, key) => {
                            return <View key={key}>
                                <Text style={{ fontSize: 15 }}>{item.name} - {item.price} * {item.quantity} = {(item.price * item.quantity).toFixed(2)}</Text>
                                <Button title='Remove' onPress={() => removeItem(item)}></Button>

                            </View>
                        })
                    }
                    <Button onPress={() => emptyCart()} title="Empty Cart"></Button></>
            }



        </View>
    )
}



export default CartStackScreen
