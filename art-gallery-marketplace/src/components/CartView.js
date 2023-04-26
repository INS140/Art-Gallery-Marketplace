import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import CartItem from './CartItem'
import './css/cart.css'

export default function CartView() {
  const { cart } = useContext(CartContext)

  return <div className="cart-container m-2">
    { !cart.length
      ? <h1 className="text-light text-center my-5">Your cart is empty.</h1>
      : <>
        <h1>Your Cart</h1>
        <div className='text-dark'>
          {cart.map(item => <CartItem key={item.id} item={item} />)}
        </div>
      </>
    }
  </div>
}

