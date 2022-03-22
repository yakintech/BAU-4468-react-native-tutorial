import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const StateSample3 = () => {


    let categoryList = [
        {
            "id": 2,
            "description": "Sweet and savory sauces relishes spreads and seasonings",
            "name": "Condiments"
        },
        {
            "id": 1,
            "description": "Soft drinks coffees teas beers and ales",
            "name": "Beverages"
        },
        {
            "id": 3,
            "description": "Desserts candies and sweet breads",
            "name": "Confections"
        },
        {
            "id": 4,
            "description": "Cheeses",
            "name": "Dairy Products"
        },
        {
            "id": 5,
            "description": "Breads crackers pasta and cereal",
            "name": "Grains/Cereals"
        },
        {
            "id": 6,
            "description": "Prepared meats",
            "name": "Meat/Poultry"
        },
        {
            "id": 7,
            "description": "Dried fruit and bean curd",
            "name": "Produce"
        },
        {
            "id": 8,
            "description": "Seaweed and fish",
            "name": "Seafood"
        }
    ];

    const [categories, setCategories] = useState(categoryList);

    const removeCategory = (item) => {

        let newCategoryList = categories.filter(q => q.id != item.id);
        setCategories(newCategoryList)
    }

    return (
        <View>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Length: {categories.length}</Text>
            {
                categories.map((item, key) => {
                    return <>

                        <Text>{item.name}</Text>
                        <Button title='Remove' onPress={() => removeCategory(item)}></Button>
                    </>
                })
            }
        </View>
    )
}

export default StateSample3
