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
            <h1 className="mt-3" style={{textAlign: "center"}}>Art Gallery</h1>
            <hr></hr>
            <div className="grid-container bg-dark" >
                {data.map(image => {return <Link style={{textDecoration:"none"}} to={`/artworks/${image._id}`}><ImageView image={image}/></Link>})}
            </div>
        </div>
    )
}