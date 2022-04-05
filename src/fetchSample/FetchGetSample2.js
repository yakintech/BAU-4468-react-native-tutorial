import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView, ActivityIndicator, Button } from 'react-native'


const FetchGetSample2 = () => {

    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        getOrders();

    }, []);


    const getOrders = () => {
        fetch("https://northwind.vercel.app/api/orders")
            .then(res => res.json())
            .then((data) => {
                setOrders(data);
                setLoading(false);
            })
    }


    const deleteOrder = (id) => {

        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch("https://northwind.vercel.app/api/orders/" + id, requestOptions)
            .then(res => res.json())
            .then((data) => {
                //Delete operation success!!
                // I get new orders!!!
                getOrders();

            })


    }

    return (
        <ScrollView>

            {
                loading == true ? <ActivityIndicator size="small" color="#0000ff" /> :
                    orders.map((item, key) => {
                        return <>
                            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>
                                {item.shipName}
                            </Text>
                            <Button title='Delete' onPress={() => deleteOrder(item.id)}></Button>
                        </>

                    })

            }

        </ScrollView>
    )
}

export default FetchGetSample2
