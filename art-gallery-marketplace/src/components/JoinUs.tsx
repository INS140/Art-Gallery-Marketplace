import ArtistForm from './forms/ArtistForm'
import useFetch from './custom-hooks/useFetch'
import { useNavigate } from 'react-router-dom'
import React from 'react'

export default function JoinUs() {
  const { post } = useFetch()

  const navigate = useNavigate()

  const handleSubmit = async (e: Event) => {
    e.preventDefault()

    const { name, phone, email, image, style, bio }: any = e.target

    await post('/artists', {
      name: name.value,
      phone: phone.value,
      email: email.value,
      image: image.value,
      style: style.value,
      bio: bio.value
    })

    navigate('/artists')
  }

  return <div className='join-us'>
    <h2>Join Us</h2>
    <p>Sell your beautiful art on our website today!</p>
    <ArtistForm
      legend='New Artist Application'
      onSubmit={handleSubmit}
      formInputs={{
        name: '',
        phone: '',
        email: '',
        image: '',
        style: '',
        bio: ''
      }}
    />
  </div>
}