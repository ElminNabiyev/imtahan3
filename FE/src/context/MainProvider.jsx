import React from 'react'
import { useState } from 'react'
import { createContext } from 'react'
import useLocalStorage from '../hooks/useLocalStorage'

export const MainContext = createContext()

function MainProvider({ children }) {
  const [basket, setBasket] = useLocalStorage("basket",[])

  function addBasket(item) {
    const index = basket.findIndex(x => x._id === item._id)
    const element = basket[index]
    if (index !== -1) {
      element.count++
      setBasket([...basket])
    }
    else {
      setBasket([...basket, { ...item, count: 1 }])
    }
  }

  function removeBasket(item) {
    setBasket(basket.filter(x => x._id !== item._id))
  }

  function decreaseBasket(item) {
    const index = basket.findIndex(x => x._id === item._id)
    const element = basket[index]
    if (element.count > 1) {
      element.count--
      setBasket([...basket])
    }
  }
  return (
    <MainContext.Provider value={{ basket, addBasket, removeBasket, decreaseBasket }}>{children}</MainContext.Provider>
  )
}

export default MainProvider