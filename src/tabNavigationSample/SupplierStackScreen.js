import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native'
import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { API_URL } from '../env/config';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Formik } from 'formik';


const SupplierStack = createNativeStackNavigator();

const SupplierStackScreen = () => {

    return <SupplierStack.Navigator>
        <SupplierStack.Screen name="SupplierScreen" component={SupplierListScreen} />
        <SupplierStack.Screen name="AddNewSupplier" component={AddSupplierScreen} />

    </SupplierStack.Navigator>

}

export default SupplierStackScreen




const SupplierListScreen = () => {

    const [suppliers, setSuppliers] = useState([]);


    useEffect(() => {

        getSuppliers();

    }, []);

    const getSuppliers = () => {
        axios.get(API_URL + "/suppliers")
            .then((result) => {
                setSuppliers(result.data)
            })
    }


    const removeItem = (id) => {
        axios.delete(API_URL + '/suppliers/' + id)
            .then((res) => {
                alert("Success");
                getSuppliers()
            })
    }

    const renderItem = ({ item }) => {
        return (<><Text>{item.companyName}</Text><Button onPress={() => removeItem(item.id)} title='Delete Supplier'></Button></>)
    }

    return (
        <View>
            <FlatList
                data={suppliers}
                renderItem={renderItem}
            >

            </FlatList>
        </View>
    )

}


const AddSupplierScreen = () => {


    const addNewSupplier = (values) => {

        axios.post(API_URL + "/suppliers", values)
            .then((res) => {
                alert("New supplier added!")
            })
    }


    return <Formik
        initialValues={{ companyName: '', contactName: '', contactTitle: '' }}
        onSubmit={values => addNewSupplier(values)}
    >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
            <View>
                <TextInput
                    onChangeText={handleChange('companyName')}
                    value={values.companyName}
                    style={styles.input}
                    placeholder='Company Name'
                />

                <TextInput
                    onChangeText={handleChange('contactName')}
                    value={values.contactName}
                    style={styles.input}
                    placeholder='Contact Name'
                />

                <TextInput
                    onChangeText={handleChange('contactTitle')}
                    value={values.contactTitle}
                    style={styles.input}
                    placeholder='Contact Title'
                />

                <Button onPress={handleSubmit} title="Submit" />
            </View>
        )}
    </Formik>


}

const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
});
