// import React, { useState } from 'react'
// import { View, Text } from 'react-native'
// import { Input } from 'react-native-elements/dist/input/Input'
// import { Button } from 'react-native-elements/dist/buttons/Button'

// const AddCategory = (props) => {

//     const [name, setName] = useState('');
//     const [description, setDescription] = useState('');

//     //console.log('Add Category component rendered!!')

//     const addNewCategory = () => {

//         let newCategory = {
//             name: name,
//             description: description
//         }

//         let requestOptions = {
//             method: 'POST',
//             headers: {
//                 'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newCategory)
//         }


//         fetch("https://northwind.vercel.app/api/categories", requestOptions)
//         .then(res => res.json())
//         .then((data) => {
//             // I must get new category list!!

//             props.getCategories();

//         })

//     }
    
//     return (
//         <View>
//             <Input
//                 placeholder='Category Name'
//                 onChangeText={(e) => setName(e)}
                
//             />
//             <Input
//                 placeholder='Description'
//                 onChangeText={(e) => setDescription(e)}

//             />
//             <Button
//                 title="Add"
//                 buttonStyle={{
//                     backgroundColor: '#5233FF',
//                     borderRadius: 3,
//                 }}
//                 containerStyle={{
//                     width: 200,
//                     marginHorizontal: 50,
//                     marginVertical: 10,
//                 }}
//                 onPress={() => addNewCategory()}
//                 >

//             </Button>
//         </View>
//     )
// }

// export default AddCategory
