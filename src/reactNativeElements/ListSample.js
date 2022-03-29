import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem } from 'react-native-elements'


const ListSample = () => {

    const [suppliers, setSuppliers] = useState([]);


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {

                setSuppliers(data);

            })

    })

    const renderSupplier = ({ item }) => {
        return (
        <ListItem bottomDivider>
            <ListItem.Content>
                <ListItem.Title>{item.companyName}</ListItem.Title>
                <ListItem.Subtitle>{item.contactName}</ListItem.Subtitle>
            </ListItem.Content>
        </ListItem>)
    }
    return (
        <View>
            <FlatList
                data={suppliers}
                renderItem={renderSupplier}
            >

            </FlatList>
        </View>
    )
}

export default ListSample
