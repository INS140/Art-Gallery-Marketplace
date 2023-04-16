export default function ArtistView(artist){
 return(
    <div>
        <img style={{'border-radius':'50%'}} src={artist.artistImg} alt="Artist"/>
        <h2>{artist.name}</h2>
        <p>{artist.bio}</p>
        <p>{artist.style}</p>
        <p>{artist.commissionWage}</p>
    </div>
 )
}
