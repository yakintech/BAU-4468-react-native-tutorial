import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CategoryPage from './src/CategoryCRUD/CategoryPage'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import HomeScreen from './src/navigationSample/HomeScreen';
import UserScreen from './src/navigationSample/UserScreen';

const Stack = createNativeStackNavigator();

const App = () => {

  let user = {
    name: "Çağatay",
    surname: "Yıldız",
    year: 2022,
    address: {
      street: 'Süleyman Seba',
      city: 'İstanbul'
    }
  }


  let metalBands = ['Iron Maiden', 'Gojira', 'In Flames', 'Rotting Christ'];


  let categories = [
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

  const myFunction = (name) => {

    alert('Hello ' + name);

  }

  const myFunctionForChild = (name, surname) => {
    alert(name + " " + surname)
  }


  console.log('App.js rendered');
  return (
    <>

        <NavigationContainer>

          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="User" component={UserScreen} />
          </Stack.Navigator>

        </NavigationContainer>
  

    </>

  )
}

export default App
