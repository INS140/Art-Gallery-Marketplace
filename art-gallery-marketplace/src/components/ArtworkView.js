import './css/images.css'
import useFetch from './custom-hooks/useFetch';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ArtworkView() {
    const { get } = useFetch()

    const [image, setImage] = useState([])

    const params = useParams()
    useEffect(() => {
        (async () => {const image = await get(`/artworks/${params.id}`)
        setImage(image)
    })()
}, [])
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
