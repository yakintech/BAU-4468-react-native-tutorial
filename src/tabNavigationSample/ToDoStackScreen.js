import React from 'react'
import { View, Text } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AddToDo from './AddToDo';
import ToDoList from './ToDoList';

const ToDoStack = createNativeStackNavigator();



const ToDoStackScreen = () => {
    return (
        <ToDoStack.Navigator>
            <ToDoStack.Screen name="ToDoScreen" component={ToDoScreen} />
        </ToDoStack.Navigator>
    )
}


const ToDoScreen = () => {


    return (
        <View>
            <AddToDo></AddToDo>
            <ToDoList></ToDoList>
        </View>
    )
}

export default ToDoStackScreen
