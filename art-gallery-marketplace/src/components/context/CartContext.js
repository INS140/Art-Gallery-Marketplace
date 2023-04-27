import { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export default function CartProvider({children}) {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('cart')) ?? [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

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