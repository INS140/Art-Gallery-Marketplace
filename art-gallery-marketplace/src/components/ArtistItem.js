import { Link } from "react-router-dom"

export default function ArtistItem({artist}) {
    return (
        <div className="bg-secondary rounded-4" style={{width:"30vw", height:"30vh", display:"inline-block,"}}>
            <Link style={{textDecoration:"none"}} className="text-light" to={`/artists/${artist.id}`}>
            <img src={artist.image} alt="Artist" />
            <h2>{artist.name}</h2>
            <p>{artist.bio}</p>
            </Link>
        </div>
    )
}