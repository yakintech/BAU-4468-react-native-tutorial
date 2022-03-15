import React from 'react'
import { View, Text } from 'react-native'

const HeaderTitle = () => {

    const headerStyles = {
        flex:1,
        flexDirection:'row',
        justifyContent: 'space-between',
        // display:flex
    }
    return (
        <View style={headerStyles}>
            <Text style={{ color:'#CED1D8'}}>Friday, 15 Dec</Text>
            <Text style={{ color:'#CED1D8'}}>Search Icon</Text>
        </View>
    )
}

export default HeaderTitle
