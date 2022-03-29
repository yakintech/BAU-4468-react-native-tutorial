import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'

const FlatListSample = () => {


    const [suppliers, setSuppliers] = useState([]);


    useEffect(() => {

        fetch("https://northwind.vercel.app/api/suppliers")
            .then(res => res.json())
            .then((data) => {

                setSuppliers(data);

            })

    });

    const renderSupplier = ({ item }) => {
       return <Text style={{fontSize:60, fontWeight:'bold'}}>{item.companyName}</Text>
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

export default FlatListSample
