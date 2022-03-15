import React from 'react'
import { View, Text, SafeAreaView } from 'react-native'
import CategoryList from './src/JsxSample/CategoryList'
import CityList from './src/JsxSample/CityList'

import Content from './src/JsxSample/Content'
import Footer from './src/JsxSample/Footer'
import IfElseSample from './src/JsxSample/IfElseSample'
import UserDetail from './src/JsxSample/UserDetail'
import BackNeck from './src/templateSample/BackNeck'
import Elbow from './src/templateSample/Elbow'
import Hand from './src/templateSample/Hand'
import HeaderTitle from './src/templateSample/HeaderTitle'
import HeadFace from './src/templateSample/HeadFace'
import Menu from './src/templateSample/Menu'
import Title from './src/templateSample/Title'



const App = () => {
  return (
    <>
      <SafeAreaView style={{ flex: 1, padding: 20 }}>
        <View style={{ flex: 1, padding: 20 }}>
          <HeaderTitle></HeaderTitle>
          <Title></Title>
          <HeadFace></HeadFace>
          <BackNeck></BackNeck>
          <Elbow></Elbow>
          <Hand></Hand>
          <Menu></Menu>
        </View>

      </SafeAreaView>
    </>

  )
}

export default App
