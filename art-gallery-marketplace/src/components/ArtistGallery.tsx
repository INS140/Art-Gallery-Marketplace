import { Link } from "react-router-dom"
import useFetch from "./custom-hooks/useFetch"
import { useEffect, useState } from "react"
import ArtistItem from "./ArtistItem"
import React from "react"

export default function ArtistGallery(){
  const { get } = useFetch()

  const [data, setData] = useState<any>([])

  useEffect(() => {
    (async () => {const data = await get('/artists/')
    setData(data)
    })()
  }, [])
  
  return <div className="m-2">
    <h1 className="text-light" style={{textAlign: "center"}}>Artists</h1>
    <hr></hr>
    <h3 className="text-secondary" style={{textAlign: "center"}}>
      Not an artist? Want to be? Click &nbsp;
      <Link to="/join-us" className="btn btn-primary">Here</Link>
      &nbsp; to make your artist page!
    </h3>
    <hr></hr>
      <div className="grid-container">
        {!data.length
          ? <>Loading ...</>
          : data.map((artist: any) => <ArtistItem key={artist.id} artist={artist} />)}
      </div>
  </div>
}