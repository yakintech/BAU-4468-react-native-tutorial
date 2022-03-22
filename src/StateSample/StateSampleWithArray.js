import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const StateSampleWithArray = () => {

    let metalBand = ['Slipknot', 'Moonspell', 'Parkway Drive', 'Rammstein'];

    const [metals, setMetals] = useState(metalBand);


    const removeMetal = (item) => {

   
        let newMetalBands = metals.filter(q => q != item);
        
        setMetals(newMetalBands);

    }

    return (
        <View>
            {
                metals.map((item, key) => {
                  return  <>
                        <Text>{item}</Text>
                        <Button title='Delete' onPress={() => removeMetal(item)}></Button>
                    </>

                })
            }
        </View>
    )
}

export default StateSampleWithArray
