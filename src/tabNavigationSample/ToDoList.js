import React from 'react'
import { View, Text, Button } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { emptyList, removeAll, todoDeleted } from '../store/actions/todo.action';

const ToDoList = () => {

    const todos = useSelector((todos) => todos);
    const dispatch = useDispatch();

    const deleteToDo = (name) => {
        dispatch(todoDeleted(name))
    }

    return (
        <View>
            {
                todos && todos.map((item, key) => {
                    return <View key={key}><Text>{item.name}</Text>
                    <Button title='Delete' onPress={() => deleteToDo(item.name)}></Button>
                    </View>
                })
            }

            <Button onPress={() => dispatch(removeAll())} title='Empty'></Button>
        </View>
    )
}

export default ToDoList
