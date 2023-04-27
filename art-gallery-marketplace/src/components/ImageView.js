import './css/images.css'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { CartContext} from './context/CartContext'

export default function ImageView({image}) {
  const { handleCartAdd } = useContext(CartContext)

  return <div className='art-container'>
    <Link style={{textDecoration:"none"}} to={`/artworks/${image._id}`}>
      <h1 className="text-light">{image.title}</h1>        
      <img style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }} src={image.pic} className='center' alt="Image" />
      <p className="text-light view-para">{image.description}</p>        
      <h3 className="text-light">{image.artist}</h3>  
      <h5 className="text-light">Size: {image.size}</h5> 
      <h5 className="text-light">Year: {image.year}</h5>        
      <h5 className="text-light">Style: {image.style}</h5>        
      <h5 className="text-light">Price: ${image.price}</h5>        
      <h5 className="text-light">Copies: {image.copies}</h5>        
      <h5 className="text-light">Sold: {image.sold ? 'Sold' : 'Available'}</h5>
    </Link>
    <hr></hr>
    <button className="btn btn-primary" onClick={() => handleCartAdd(image)}>Add to cart</button>  
  </div>
}
