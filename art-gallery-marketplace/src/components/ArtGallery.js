import ImageView from "./ImageView";
import useFetch from "./custom-hooks/useFetch";
import { useEffect, useState } from "react";

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
            {data.map(image => <ImageView image={image}/>)}
        </div>
    )
}