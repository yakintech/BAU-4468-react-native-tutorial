import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import EffectSample from './src/effectSample/EffectSample'
import EffectSample2 from './src/effectSample/EffectSample2'
import FetchGetSample from './src/fetchSample/FetchGetSample'
import FlatListSample from './src/flatListSample/FlatListSample'
import CategoryList from './src/JsxSample/CategoryList'
import CityList from './src/JsxSample/CityList'

import Content from './src/JsxSample/Content'
import Footer from './src/JsxSample/Footer'
import IfElseSample from './src/JsxSample/IfElseSample'
import UserDetail from './src/JsxSample/UserDetail'
import PropsArraySample from './src/propSample/PropsArraySample'
import PropsFunctionSample from './src/propSample/PropsFunctionSample'
import PropsObjectArraySample from './src/propSample/PropsObjectArraySample'
import PropsObjectSample from './src/propSample/PropsObjectSample'
import ListSample from './src/reactNativeElements/ListSample'
import ProductListSample from './src/reactNativeElements/ProductListSample'
import StateSample from './src/StateSample/StateSample'
import StateSample2 from './src/StateSample/StateSample2'
import StateSample3 from './src/StateSample/StateSample3'
import StateSampleWithArray from './src/StateSample/StateSampleWithArray'
import BackNeck from './src/templateSample/BackNeck'
import DynamicBox from './src/templateSample/DynamicBox'
import Elbow from './src/templateSample/Elbow'
import Hand from './src/templateSample/Hand'
import HeaderTitle from './src/templateSample/HeaderTitle'
import HeadFace from './src/templateSample/HeadFace'
import Menu from './src/templateSample/Menu'
import Title from './src/templateSample/Title'



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
      <SafeAreaView style={{ flex: 1, padding: 20 }}>

        <ProductListSample></ProductListSample>
        {/* <ListSample></ListSample> */}
        {/* <FlatListSample></FlatListSample> */}
        {/* <FetchGetSample></FetchGetSample> */}

        {/* <EffectSample2></EffectSample2> */}
        {/* <EffectSample></EffectSample> */}
        {/* <StateSample3></StateSample3> */}
        {/* <StateSampleWithArray></StateSampleWithArray> */}
        {/* <StateSample2></StateSample2> */}
        {/* <StateSample></StateSample> */}
        {/* <PropsFunctionSample myFunc2={myFunctionForChild} myFunc={myFunction}></PropsFunctionSample> */}


        {/* <PropsObjectArraySample categoryList={categories}></PropsObjectArraySample> */}
        {/* <PropsArraySample metals={metalBands} year={2022}></PropsArraySample> */}

        {/* <PropsObjectSample webUser={user}></PropsObjectSample> */}
        {/* <View style={{ flex: 1, padding: 20 }}> */}
        {/* <HeaderTitle></HeaderTitle>
          <Title></Title>
          
          <DynamicBox bColor='#CC7463' title='Head / Face' subTitle='11 diseases'></DynamicBox>

          <DynamicBox bColor='#8cc0b7' title='Back / Neck' subTitle='11 diseases'></DynamicBox>

          <DynamicBox bColor='#D7952D' title='Elbow / Neck' subTitle='11 diseases'></DynamicBox>

          <DynamicBox bColor='#48687A' title='Hand / Arm' subTitle='11 diseases'></DynamicBox> */}

        {/* <HeadFace></HeadFace> */}
        {/* <BackNeck></BackNeck> */}
        {/* <Elbow></Elbow> */}
        {/* <Hand></Hand> */}

        {/* <Menu></Menu> */}
        {/* </View> */}


      </SafeAreaView>
    </>

  )
}

export default App
