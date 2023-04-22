import Input from '../ui-kit/Input'
import TextArea from '../ui-kit/TextArea'
import useFormHandler from '../custom-hooks/useFormHandler'
import '../css/new-artist-form.css'

export default function NewArtistForm(props) {
  const { inputs, handleChange } = useFormHandler({
    name: '',
    phone: '',
    email: '',
    image: '',
    style: '',
    bio: ''
  })

  return <div className='artist-form-container'>
    <h2>Join Us</h2>
    <p>Sell your beautiful art on our website today!</p>
    <form>
      <legend>New Artist Application</legend>
      <Input
        label=''
        name='name'
        value={inputs.name}
        onChange={handleChange}
      />
      <Input
        label=''
        name='phone'
        value={inputs.phone}
        onChange={handleChange}
      />
      <Input
        label=''
        name=''
        value={inputs.email}
        onChange={handleChange}
      />
      <Input
        label=''
        name=''
        value={inputs.image}
        onChange={handleChange}
      />
      <Input
        label=''
        name=''
        value={inputs.style}
        onChange={handleChange}
      />
      <TextArea
        label=''
        name=''
        value={inputs.bio}
        onChange={handleChange}
      />
    </form>
  </div>
}