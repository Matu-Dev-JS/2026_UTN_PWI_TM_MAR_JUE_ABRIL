import React, { useState } from 'react'

import Contador from './Components/Contador/Contador'
import Modal from './Components/Modal/Modal'
import useModal from './hooks/useModal'
import Messages from './Components/Messages/Messages'

import HomeScreen from './Screens/HomeScreen/HomeScreen'

import { Route, Routes } from 'react-router'
import LoginScreen from './Screens/LoginScreen/LoginScreen'
import ProductDetailScreen from './Screens/ProductDetailScreen/ProductDetailScreen'

//Las funciones que devuelven HTML se llaman componentes
function App() {

  const messages_server = [
    {
      id: 1,
      sendByMe: false,
      content: "hola!"
    },
    {
      id: 2,
      sendByMe: true,
      content: "Todo bien!"
    },
    {
      id: 3,
      sendByMe: false,
      content: "Que tal?"
    },
    {
      id: 4,
      sendByMe: true,
      content: "Todo bien!"
    }
  ]


  return (
    <div>
      
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path='/home' element={<HomeScreen/>}/>
        <Route 
          path='/products/:product_id' 
          element={<ProductDetailScreen/>}
        />
        <Route path='/login' element={<LoginScreen/>}/>
      </Routes>

    </div>
  )
}



export default App