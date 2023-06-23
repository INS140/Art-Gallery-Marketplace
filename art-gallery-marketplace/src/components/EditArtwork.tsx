import ArtworkForm from "./forms/ArtworkForm"
import useFetch from "./custom-hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import React from "react"

export default function EditArtwork() {
  const { get, put } = useFetch()

  const params = useParams()

  const navigate = useNavigate()

  const [artwork, setArtwork] = useState<any>({})

  useEffect(() => {
    (async () => {
        const data = await get(`/artworks/${params.id}`)
        setArtwork(data)
    })()
  }, [])

  const handleSubmit = async (e: Event) => {
    e.preventDefault()

    const { title, pic, description, price, year, style, size, copies}: any = e.target

    await put(`/artworks/${params.id}`, {
      title: title.value,
      pic: pic.value,
      artist: artwork.artist,
      description: description.value,
      price: price.value,
      year: year.value,
      style: style.value,
      size: size.value,
      sold: false,
      copies: copies.value
    })

    navigate(`/artists/${artwork.artist}`)
  }

  return <div>
    <h1 className='text-secondary' style={{textAlign:"center"}}>Update Artwork</h1>
    {!artwork.title
        ? <></>
        : <ArtworkForm
            onSubmit={handleSubmit}
            formInputs={{
                title: artwork.title,
                pic: artwork.pic,
                artist: artwork.artist,
                description: artwork.description,
                price: artwork.price,
                year: artwork.year,
                style: artwork.style,
                size: artwork.size,
                sold: artwork.sold,
                copies: artwork.copies
            }}
        />
    }
  </div>
}