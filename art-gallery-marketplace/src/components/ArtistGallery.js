import { Link } from "react-router-dom"
import useFetch from "./custom-hooks/useFetch"
import { useEffect, useState } from "react"
import ArtistItem from "./ArtistItem"

export default function ArtistGallery(){
  const { get } = useFetch()

  const [data, setData] = useState([])

  useEffect(() => {
    (async () => {const data = await get('/artists/')
    setData(data)
    })()
  }, [])
  
  return <div className="m-2">
    <h1 className="text-light" style={{textAlign: "Center"}}>Artists</h1>
    <hr></hr>
    <h3 className="text-secondary" style={{textAlign: "Center"}}>
      Not an artist? Want to be? Click &nbsp;
      <Link to="/join-us" className="btn btn-primary">Here</Link>
      &nbsp; to make your artist page!
    </h3>
    <hr></hr>
      <div className="grid-container">
        {!data.length
          ? <>Loading ...</>
          : data.map(artist => <ArtistItem key={artist.id} artist={artist} />)}
      </div>
  </div>
}