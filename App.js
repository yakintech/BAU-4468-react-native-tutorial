import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeStackScreen from './src/tabNavigationSample/HomeStackScreen';
import ProductsStackScreen from './src/tabNavigationSample/ProductsStackScreen';
import CartStackScreen from './src/tabNavigationSample/CartStackScreen';
import NotificationStackScreen from './src/tabNavigationSample/NotificationStackScreen';
import ProfileStackScreen from './src/tabNavigationSample/ProfileStackScreen';
import {CartProvider} from './src/store/cartContext';
import TabMain from './src/tabNavigationSample/TabMain';


// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
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




  return (
    <>

      <CartProvider>
        <TabMain></TabMain>
      </CartProvider>
    </>

  )
}

export default App
