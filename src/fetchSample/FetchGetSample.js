import React, { useEffect, useState } from 'react'
import { View, Text, ScrollView } from 'react-native'

const FetchGetSample = () => {

    const apiURL = 'https://northwind.vercel.app/api/products';

    const [products, setProducts] = useState([]);


    useEffect(() => {

        fetch(apiURL)
            .then((res) => res.json())
            .then((data) => {

                setProducts(data);

            })

    }, [])

    return (
        <ScrollView>
           {
               products && products.map((item,key) => {
                  return <Text>{item.name}</Text>
               })
           }
        </ScrollView>
    )
}

export default FetchGetSample
