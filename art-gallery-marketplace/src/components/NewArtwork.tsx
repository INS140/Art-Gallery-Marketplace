import ArtworkForm from "./forms/ArtworkForm"
import useFetch from "./custom-hooks/useFetch"
import { useNavigate, useParams } from "react-router-dom"
import React from "react"

export default function NewArtwork() {
  const { post } = useFetch()

  const params = useParams()

  const navigate = useNavigate()

  const handleSubmit = async (e: Event) => {
    e.preventDefault()

    const { title, pic, description, price, year, style, size, copies}: any = e.target

    await post('/artworks', {
      title: title.value,
      pic: pic.value,
      artist: params.id,
      description: description.value,
      price: price.value,
      year: year.value,
      style: style.value,
      size: size.value,
      sold: false,
      copies: copies.value
    })

    navigate(`/artists/${params.id}`)
  }

  return <div>
    <h1 className='text-secondary' style={{textAlign:"center"}}>Add Artwork</h1>
    <ArtworkForm
      onSubmit={handleSubmit}
    />
  </div>
}