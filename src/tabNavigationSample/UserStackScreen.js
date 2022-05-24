import { View, Button, ScrollView, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ListItem } from '@rneui/themed'
import axios from 'axios';
import { Card } from '@rneui/base';

const UserStack = createNativeStackNavigator();


const UserStackScreen = () => {

    return (
        <UserStack.Navigator>
            <UserStack.Screen name='UserListScreen' component={UserListScreen} />
            <UserStack.Screen name='UserDetailScreen' component={UserDetailScreen} />

        </UserStack.Navigator>
    )
}

export default UserStackScreen




const UserListScreen = ({ navigation }) => {


    const [users, setusers] = useState([]);

    const goToDetail = (id) => {
        navigation.navigate("UserDetailScreen", { userID: id });
    }


    useEffect(() => {

        axios.get("https://jsonplaceholder.typicode.com/users")
            .then(res => {
                setusers(res.data);
            })

    }, [])



    return (
        <ScrollView>
            {
                users.map((item, index) => {
                    return <>
                        <ListItem key={index} bottomDivider>
                            <ListItem.Content>
                                <ListItem.Title>{item.name}</ListItem.Title>
                                <ListItem.Subtitle>{item.email}</ListItem.Subtitle>
                            </ListItem.Content>

                        </ListItem>
                        <Button title='Go To Detail' onPress={() => goToDetail(item.id)}></Button>
                    </>
                })
            }
        </ScrollView>
    )
}

const UserDetailScreen = ({ route, navigation }) => {

    const { userID } = route.params;

    const [user, setUser] = useState({})


    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/users/' + userID)
            .then(res => {
                setUser(res.data)
            })

    }, [])


    return <>
        <View>
            <Card>
                <Card.Title>{user.email}</Card.Title>
                <Card.Divider />
                <View>
                    <Text >{user.name} - {user.phone}</Text>
                </View>
            </Card>
        </View>
    </>

}



//https://jsonplaceholder.typicode.com/users