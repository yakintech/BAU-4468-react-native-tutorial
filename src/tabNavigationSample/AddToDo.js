import React, { useState } from 'react'
import { View, TextInput, StyleSheet, Button } from 'react-native'
import { useDispatch } from 'react-redux';
import { todoCreated } from '../store/actions/todo.action';

const AddToDo = () => {

    const [todoName, setTodoName] = useState('');
    
    const dispatch = useDispatch()

    const addNewTodo = () => {
        dispatch(todoCreated({name: todoName}))
    }

    return (
        <View>
            <TextInput
                style={styles.input}
                onChangeText={setTodoName}
                value={todoName}
            />
            <Button onPress={() => addNewTodo()} title='New ToDo'></Button>
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });

export default AddToDo
