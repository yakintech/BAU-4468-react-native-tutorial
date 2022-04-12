import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapView from 'react-native-maps'
const NotificationStack = createNativeStackNavigator();



const NotificationStackScreen = () => {
    return (
        <NotificationStack.Navigator>
            <NotificationStack.Screen name="NotificationScreen" component={NotificationScreen} />
        </NotificationStack.Navigator>
    )
}


const NotificationScreen = () => {
    return (
        <View style={styles.container}> 
            <MapView
            style={styles.map}
                initialRegion={{
                    latitude: 41.0421715802,
                    longitude: 29.007664219,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421,
                }}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1, //the container will fill the whole screen.
      justifyContent: "flex-end",
      alignItems: "center",
    },
    map: {
      ...StyleSheet.absoluteFillObject,
    },
  });


export default NotificationStackScreen
