import ArtistForm from './forms/ArtistForm'
import useFetch from './custom-hooks/useFetch'

export default function JoinUs() {
  const { post } = useFetch()

  const handleSubmit = e => {
    e.preventDefault()

    const { name, phone, email, image, style, bio } = e.target

    post('/artists', {
      name: name.value,
      phone: phone.value,
      email: email.value,
      image: image.value,
      style: style.value,
      bio: bio.value
    })
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