import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import React, { useContext, useEffect } from "react";
import MaterialCommunityIcons from '../../node_modules/react-native-vector-icons/MaterialCommunityIcons';
import { getCart, storeCart } from "../helper/storageHelper";
import cartContext from "../store/cartContext";
import CartStackScreen from "./CartStackScreen";
import HomeStackScreen from "./HomeStackScreen";
import NotificationStackScreen from "./NotificationStackScreen";
import ProductsStackScreen from "./ProductsStackScreen";
import ProfileStackScreen from "./ProfileStackScreen";
import SupplierStackScreen from "./SupplierStackScreen";
import ToDoStackScreen from "./ToDoStackScreen";



const Tab = createBottomTabNavigator();


const TabMain = () => {

    const { cart, setCart } = useContext(cartContext);

    useEffect(() => {

        getCart()
            .then((data) => {

                setCart(data);

            })

    }, [])
    return (

        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen options={{
                    tabBarIcon: () => (<MaterialCommunityIcons name="home" size={40}></MaterialCommunityIcons>),
                    headerShown: false
                }} name="Supplier" component={SupplierStackScreen} />

                <Tab.Screen options={{
                    tabBarIcon: () => (<MaterialCommunityIcons name="jira" size={40}></MaterialCommunityIcons>),
                    headerShown: false
                }
                } name="Products" component={ProductsStackScreen} />

                <Tab.Screen options={
                    {
                        tabBarIcon: () => (<MaterialCommunityIcons name="cart" size={40}></MaterialCommunityIcons>),
                        headerShown: false,
                        tabBarBadge: cart.length
                    }
                } name="Cart" component={CartStackScreen} />


                <Tab.Screen options={
                    {
                        tabBarIcon: () => (<MaterialCommunityIcons name="notification-clear-all" size={40}></MaterialCommunityIcons>),
                        headerShown: false
                    }
                } name="Notification" component={NotificationStackScreen} />


                <Tab.Screen options={
                    {
                        tabBarIcon: () => (<MaterialCommunityIcons name="umbrella" size={40}></MaterialCommunityIcons>),
                        headerShown: false
                    }
                } name="ToDo" component={ToDoStackScreen} />


                {/* <Tab.Screen options={
                    {
                        tabBarIcon: () => (<MaterialCommunityIcons name="umbrella" size={40}></MaterialCommunityIcons>),
                        headerShown: false
                    }
                } name="Profile" component={ProfileStackScreen} /> */}


            </Tab.Navigator>
        </NavigationContainer>

    )
}

export default TabMain
