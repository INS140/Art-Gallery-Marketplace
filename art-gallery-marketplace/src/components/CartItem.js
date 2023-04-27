import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext } from './context/CartContext'

export default function CartItem({ item }) {
  const {
    title,
    pic,
    description,
    price,
    quantity
  } = item

  const { handleCartRemove } = useContext(CartContext)

  return <div className="cart-item bg-light rounded-end my-3">
    <div className="mh-100 item-img-container">
      <Link to={`/artworks/${item._id}`}>
        <img src={pic} alt={title} className="item-img" />
      </Link>
    </div>
    <div className="item-details p-2">
      <h3 className="d-inline">{title}</h3>
      <button className='d-inline float-end bg-dark text-light' onClick={() => handleCartRemove(item)}>Remove</button>
      <p className='h-50 p-1 my-1 item-description border-dark-subtle'>{description}</p>
      <span className="float-start mt-2 fs-5">Price: ${price}</span>
      <span className="float-end mt-2 fs-5">Quantity: {quantity}</span>
    </div>
  </div>
}