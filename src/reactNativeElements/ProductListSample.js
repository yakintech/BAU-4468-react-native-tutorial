import React, { useEffect, useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import { ListItem, Button, Input } from 'react-native-elements'

const ProductListSample = () => {

    const [products, setProducts] = useState([]);
    const [myOriginalData, setMyOriginalData] = useState([]);
    const [productCount, setProductCount] = useState('');



    console.log('Product List Sample component rendered!');

    useEffect(() => {

        fetch("https://northwind.vercel.app/api/products")
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
                setMyOriginalData(data);
            })

    }, []);


    const productItemRender = ({ item }) => {

        return (
            <ListItem bottomDivider>
                <ListItem.Content>
                    <ListItem.Title>{item.name}</ListItem.Title>
                    <ListItem.Subtitle>{item.unitPrice.toFixed(2)}</ListItem.Subtitle>
                </ListItem.Content>
            </ListItem>)
    }


    const getProducts = () => {

        if(productCount == '' || productCount == null || productCount == undefined){
            setProducts(myOriginalData);
        }
        else{
            let newProducts = myOriginalData.slice(0,productCount);
            setProducts(newProducts);
        }

        

    }


    return (
        <View>
            <View>

                <Input
                    placeholder='Count: '
                    value={productCount}
                    onChangeText={(e) => setProductCount(e) }
                    
                />
                <Button onPress={() => getProducts()} title='GET DATA'></Button>


            </View>

            <FlatList
                data={products}
                renderItem={productItemRender}
            >
            </FlatList>
        </View>
    )

}

export default ProductListSample
