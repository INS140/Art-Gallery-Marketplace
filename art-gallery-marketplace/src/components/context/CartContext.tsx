import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext([])

export default function CartProvider({children}: {children: any}) {
  const [cart, setCart] = useState<any>(JSON.parse(localStorage.getItem('cart') as any) ?? [])

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const handleCartAdd = (newItem: {_id: number}) => {
    const cartFilter = cart.filter((item: {_id: number}) => item._id === newItem._id)
    cartFilter.length === 0
      ? setCart((prev: any) => [...prev, {...newItem, quantity: 1}])
      : setCart((prev: any) => prev.map((item: {_id: number, quantity: number}) => {
        return item._id === newItem._id
          ? {...item, quantity: item.quantity + 1}
          : item
      }))
  }

  const handleCartRemove = (item: {_id: number}) => {
    setCart((prev: any) => prev.filter((i: {_id: number}) => i._id !== item._id))
  }

  const values: any = {cart, handleCartAdd, handleCartRemove}

  return <CartContext.Provider value={values}>
    {children}
  </CartContext.Provider>
}