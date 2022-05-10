import React from 'react'
import { createStore } from 'redux';
import { CartProvider } from './src/store/cartContext';
import TabMain from './src/tabNavigationSample/TabMain';
import TodoReducer from './src/store/reducers/todo.reducer'
import { Provider } from 'react-redux';



const App = () => {

  const store = createStore(
    TodoReducer
  )

  return (
    <>
      <Provider store={store}>
        <CartProvider>
          <TabMain></TabMain>
        </CartProvider>
      </Provider>

    </>

  )
}

export default App
