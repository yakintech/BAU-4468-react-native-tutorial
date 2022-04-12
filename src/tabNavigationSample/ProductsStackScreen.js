import React, { useEffect, useState } from 'react'
import { View, Text, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { API_URL } from '../env/config';

const ProductsStack = createNativeStackNavigator();

const ProductsStackScreen = () => {
    return (
        <ProductsStack.Navigator>
            <ProductsStack.Screen name="Product" component={ProductScreen} />
            <ProductsStack.Screen options={({ route }) => ({ title: route.params.title })} name="ProductDetail" component={ProductDetailScreen} />

        </ProductsStack.Navigator>
    )
}



const ProductScreen = ({ navigation }) => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(API_URL + "/products")
            .then(res => res.json())
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })

    }, [])

    const goToDetail = (id, name) => {

        navigation.navigate("ProductDetail", { productId: id, title: name });


    }

    const renderProductItem = ({ item }) => {
        return <TouchableOpacity onPress={() => goToDetail(item.id, item.name)}>
            <Text style={{ fontSize: 20, fontWeight: 'bold' }}>{item.name}</Text>
        </TouchableOpacity>
    }

    return (
        <>
            {
                loading == true ? <ActivityIndicator size="small" color="#0000ff" /> : <View>
                    <FlatList
                        data={products}
                        renderItem={renderProductItem}
                        initialNumToRender={50}
                    >

                    </FlatList>
                </View>
            }
        </>

    )
}


const ProductDetailScreen = ({ route, navigation }) => {

    const { productId } = route.params;

    const [product, setProduct] = useState({});
    const [loading, setLoading] = useState(true)


    useEffect(() => {

        fetch(API_URL + "/products/" + productId)
            .then(res => res.json())
            .then((data) => {
                setProduct(data);
                setLoading(false);
            })

    }, [])

    return (<>
        {
            loading == true ? <ActivityIndicator size="small" color="#0000ff" /> : <>
                <Text>ID: {product.id}</Text>
                <Text>Name: {product.name}</Text>
                <Text>Unit Price: {product.unitPrice}</Text>
                <Text>Stock: {product.unitsInStock}</Text> 
                </>

        }

    </>)


}

export default ProductsStackScreen
