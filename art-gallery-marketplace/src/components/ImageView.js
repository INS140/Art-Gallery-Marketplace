import './css/images.css'
export default function ImageView({image}) {
    return (
        <div className='art-container'>
            <h1 className="text-light">{image.title}</h1>        
            <img style={{ 'marginLeft': 'auto', 'marginRight': 'auto' }} src={image.pic} className='center' alt="Image" />
            <p className="text-light view-para">{image.description}</p>        
            <h3 className="text-light">{image.artist}</h3>  
            <h5 className="text-light">Size: {image.size}</h5> 
            <h5 className="text-light">Year: {image.year}</h5>        
            <h5 className="text-light">Style: {image.style}</h5>        
            <h5 className="text-light">Price: ${image.price}</h5>        
            <h5 className="text-light">Copies: {image.copies}</h5>        
            <h5 className="text-light">Sold: {image.sold}</h5>      

        </div>
    )
}
