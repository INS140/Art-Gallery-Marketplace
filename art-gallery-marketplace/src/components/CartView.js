import { useContext } from 'react'
import { CartContext } from './context/CartContext'
import CartItem from './CartItem'
import './css/cart.css'

export default function CartView() {
  const cart = [{
    "id": "6443a3737eb20d4f1ca187ca",
    "title": "Isaac01",
    "pic": "https://media.nga.gov/iiif/d7add44a-80d3-434c-93e3-4572ab06283d/full/!740,560/0/default.jpg",
    "artist": "64420b0b403305b28b482d7b",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dsbkahwofuyqfh qducyaudbffqjhgdpy;WN P QUEJHB9 JQ'WOUPUYHQ ERLVIUWB C;QPpih h;priuvwpuerliubfvw ;hrt pw8e wjk rpiwq 3lrqfqe9fpber ;q4irvpd8 bqeqriuqbvy rlvbqp87p;3 g;jhrvekbs dg ljhedvouyv;aj ludycvpauy dvbqludyvoyl lj ouyvepquehvv;qejhpbud;vkje;uigaeyfeq v igpfdh .aknsdd luy;eqjhbe.fkjq;dvgl eqviopr; v;vipbqryu vp0q8 ue 0 hp9 h8f[ uwf87q3pfi3bfpiu3 -3h[qblhvor8vgbq ",
    "price": 30,
    "year": {
      "$date": "2021-01-01T00:00:00Z"
    },
    "style": "modern",
    "size": "10X10",
    "sold": false,
    "copies": 1,
    quantity: 1
  },
  {
    "id": "6443a3737eb20d4f1ca187ca",
    "title": "Isaac01",
    "pic": "https://media.nga.gov/iiif/d7add44a-80d3-434c-93e3-4572ab06283d/full/!740,560/0/default.jpg",
    "artist": "64420b0b403305b28b482d7b",
    "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. dsbkahwofuyqfh qducyaudbffqjhgdpy;WN P QUEJHB9 JQ'WOUPUYHQ ERLVIUWB C;QPpih h;priuvwpuerliubfvw ;hrt pw8e wjk rpiwq 3lrqfqe9fpber ;q4irvpd8 bqeqriuqbvy rlvbqp87p;3 g;jhrvekbs dg ljhedvouyv;aj ludycvpauy dvbqludyvoyl lj ouyvepquehvv;qejhpbud;vkje;uigaeyfeq v igpfdh .aknsdd luy;eqjhbe.fkjq;dvgl eqviopr; v;vipbqryu vp0q8 ue 0 hp9 h8f[ uwf87q3pfi3bfpiu3 -3h[qblhvor8vgbq ",
    "price": 30,
    "year": {
      "$date": "2021-01-01T00:00:00Z"
    },
    "style": "modern",
    "size": "10X10",
    "sold": false,
    "copies": 1,
    quantity: 1
  }] // useContext(CartContext)

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

