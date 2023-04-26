import { createContext, useState } from "react";

export const CartContext = createContext([])

export default function CartProvider({children}) {
    const [cart, setCart] = useState([])

    const handleCartAdd = item => {
        setCart(prev => [...prev, item])
    }

    const handleCartRemove = item => {
        setCart(prev => prev.filter(i => i.id !== item.id))
    }

    return <CartContext.Provider value={{cart, handleCartAdd, handleCartRemove}}>
        {children}
    </CartContext.Provider>
}