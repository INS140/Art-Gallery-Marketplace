import './css/images.css'
import useFetch from './custom-hooks/useFetch';
import { useContext, useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { CartContext } from './context/CartContext';

export default function ArtworkView() {
    const { handleCartAdd } = useContext(CartContext)
    const { get, remove } = useFetch()

    const [image, setImage] = useState([])
    const [artist, setArtist] = useState([])

    const params = useParams()

    const navigate = useNavigate()

    const handleDelete = async () => {
        await remove(`/artworks/${params.id}`)
        navigate('/artworks')
    }

    useEffect(() => {
        (async () => {
            const image = await get(`/artworks/${params.id}`)
            setImage(image)
        })()
    }, [])

    // This could be avoided with some backend changes, works as a temp fix
    useEffect(() => {
        (async () => {
            const artist = await get(`/artists/${image.artist}`)
            setArtist(artist)
        })()
    }, [image])

    return <div>
        <div className='d-flex'>
            <div className='art-container'>
                <img style={{ 'marginLeft': 'auto', 'marginRight': 'auto', 'float': 'left', 'height': '100%', 'width': '100%' }} src={image.pic} className='center' alt="Image" />
            </div>
            <div className='art-container my-5' >
                <h1 className="text-light">{image.title}</h1>
                <p className="text-light view-para">{image.description}</p>
                <h3 className="text-light">{artist.name}</h3>
                <h5 className="text-light">Size: {image.size}</h5>
                <h5 className="text-light">Year: {image.year}</h5>
                <h5 className="text-light">Style: {image.style}</h5>
                <h5 className="text-light">Price: ${image.price}</h5>
                <h5 className="text-light">Copies: {image.copies}</h5>
                <h5 className="text-light">Sold: {image.sold}</h5>
                <button className="btn btn-primary" onClick={() => handleCartAdd(image)}>Add to cart</button>
            </div>
        </div>
        <hr />
        <div className="d-flex justify-content-center gap-3">
            <Link to={`/artworks/update/${params.id}`}>
                <button className="btn btn-primary">Update Profile</button>
            </Link>
            <button className="btn btn-danger" onClick={handleDelete}>Delete Artwork</button>
        </div>
    </div>
}