import { createContext, useEffect, useState } from "react";

export const CartContext = createContext([])

export default function CartProvider({children}) {
  const [cart, setCart] = useState([])

  useEffect(() => {console.log(cart)}, [cart])

  const handleCartAdd = newItem => {
    const cartFilter = cart.filter(item => item._id === newItem._id)
    cartFilter.length === 0
      ? setCart(prev => [...prev, {...newItem, quantity: 1}])
      : setCart(prev => prev.map(item => {
        return item._id === newItem._id
          ? {...item, quantity: item.quantity + 1}
          : item
      }))
  }

  const handleCartRemove = item => {
    setCart(prev => prev.filter(i => i._id !== item._id))
  }

  return <CartContext.Provider value={{cart, handleCartAdd, handleCartRemove}}>
    {children}
  </CartContext.Provider>
}