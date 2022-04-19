import AsyncStorage from '@react-native-async-storage/async-storage';


export const storeCart = async (value) => {

      const jsonValue = JSON.stringify(value)
      await AsyncStorage.setItem('cart', jsonValue)
  
}


export const getCart = async () => {
      const jsonValue = await AsyncStorage.getItem('cart')
      return jsonValue != null ? JSON.parse(jsonValue) : []; 
}
  

  