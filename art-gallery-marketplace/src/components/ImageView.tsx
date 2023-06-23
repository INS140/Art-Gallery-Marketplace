import React from 'react';
import './css/images.css'
import useFetch from './custom-hooks/useFetch';
import { useEffect, useState } from 'react';

export default function ImageView({image}: {image: {artist: number, title: string, pic: string}}) {
    const { get } = useFetch()

    const [artist, setArtist] = useState<any>([])

    useEffect(() => {
        (async () => {
            const artist = await get(`/artists/${image.artist}`)
            setArtist(artist)
        })()    
    }, [])

    return (
        <div className="bg-secondary rounded-4" style={{ width:"30vw", height: '100%', display:"inline-block", textAlign: "center"}}>
            <h1 className="text-light">{image.title}</h1>        
            <img style={{ margin: 'auto' }} src={image.pic} className='center' alt="Image" />
            {!artist
                ? <>Loading ...</>
                : <h3 className="text-light">{artist.name}</h3>
            }
        </div>
    )
}