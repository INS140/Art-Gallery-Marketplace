import { Link } from "react-router-dom"

export default function ArtistItem(Artist) {
    return (
        <div style={{width:"30vw", height:"30vh", display:"inline-block,"}}>
            <Link  to="/artists/{Artist.id}">
            <h1 className="text-primary">Im an artist Item</h1>
            <img src={Artist.image} alt="Artist" />
            <h2>{Artist.name}</h2>
            <p>{Artist.bio}</p>
            </Link>
        </div>
    )
}