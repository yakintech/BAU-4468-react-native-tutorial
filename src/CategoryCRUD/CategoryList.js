// import React from 'react'
// import { View, Text, FlatList } from 'react-native'
// import { ListItem } from 'react-native-elements'
// import { Button } from 'react-native-elements/dist/buttons/Button'

// const CategoryList = (props) => {

//     const { categories, deleteCategory } = props

//     const renderItem = ({ item }) => {
//         return (
//             <ListItem bottomDivider>
//                 <ListItem.Content>
//                     <ListItem.Title>{item.name}</ListItem.Title>
//                     <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
//                     <Button
//                         title="Delete"
//                         buttonStyle={{
//                             backgroundColor: 'tomato',
//                             borderRadius: 3,
//                         }}
//                         containerStyle={{
//                             width: 200,
//                             marginHorizontal: 50,
//                             marginVertical: 10,
//                         }}

//                         onPress={() => deleteCategory(item.id)}
//                     ></Button>
//                 </ListItem.Content>
//             </ListItem>)
//     }

//     return (
//         <View>
//             <FlatList
//                 data={categories}
//                 renderItem={renderItem}
//             >

//             </FlatList>
//         </View>
//     )
// }

// export default CategoryList
