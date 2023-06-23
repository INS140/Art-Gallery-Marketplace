import React from "react";
import ImageView from "./ImageView";
import useFetch from "./custom-hooks/useFetch";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ArtGallery(){
    const { get } = useFetch()

    const [data, setData] = useState([])

    useEffect(() => {
        (async () => {const data = await get(`/artworks/`)
        setData(data)
    })()
}, [])
    return(
        <div>
            <h1>Art Gallery</h1>
            <div className="grid-container bg-dark" >
                {data.map((image: any) => {return <Link to={`/artworks/${image._id}`}><ImageView image={image}/></Link>})}
            </div>
        </div>
    )
}
