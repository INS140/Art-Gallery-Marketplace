import './css/artistpage.css'
import useFetch from './custom-hooks/useFetch';
import ArtCarousel from "./Carousel.js";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export default function ArtistView() {
    const { get } = useFetch()

    const [data, setData] = useState([])

    const params = useParams()
    useEffect(() => {
        (async () => {const data = await get(`/artists/${params.id}`)
        setData(data)
    })()
}, [])
    return (
        <div className='artist-container'>
            <h1 className="text-light">{data.name}</h1>        
            <img style={{ 'borderRadius': '50%', 'marginLeft': 'auto', 'marginRight': 'auto' }} src={data.image} className='center' alt="Artist" />
            <p className="text-light view-para">{data.bio}</p>        
            <h3 className="text-light">{data.style}</h3>        
            <h2 className="text-light">{data.name}'s Images</h2>
            <ArtCarousel artworks={data.artworks}/>
        </div>
    )
}
