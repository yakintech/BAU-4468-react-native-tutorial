import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
// import AddCategory from './AddCategory'
// import CategoryList from './CategoryList'



const CategoryPage = () => {


    const [categories, setCategories] = useState([]);


    useEffect(() => {

        getCategories();

    }, []);


    const deleteCategory = (id) => {

        let requestOptions = {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        }

        fetch("https://northwind.vercel.app/api/categories/" + id, requestOptions)
            .then(res => res.json())
            .then((data) => {
                getCategories();

            })


    }

    const getCategories = () => {
        fetch("https://northwind.vercel.app/api/categories")
            .then(res => res.json())
            .then((data) => {
                setCategories(data);
            })
    }

    return (
        <View>
            <View>
                {/* <AddCategory getCategories={getCategories}></AddCategory> */}
            </View>
            <View>
                {/* <CategoryList categories={categories} deleteCategory={deleteCategory}></CategoryList> */}
            </View>
        </View>
    )
}

export default CategoryPage
