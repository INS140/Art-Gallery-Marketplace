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

  const { legend, onSubmit } = props

  return <div>
    <form onSubmit={onSubmit}>
      <legend>{legend}</legend>
      <fieldset className='quad'>
        <Input
          label='Name'
          name='name'
          value={inputs.name}
          onChange={handleChange}
          required
        />
        <Input
          label='Style'
          name='style'
          value={inputs.style}
          onChange={handleChange}
          required
        />
        <Input
          label='Email'
          name='email'
          type='email'
          value={inputs.email}
          onChange={handleChange}
          required
        />
        <Input
          label='Phone'
          name='phone'
          pattern='\d{3}-\d{3}-\d{4}'
          value={inputs.phone}
          onChange={handleChange}
          required
        />
      </fieldset>
      <TextArea
        label='Bio'
        name='bio'
        value={inputs.bio}
        onChange={handleChange}
        required
        rows={5}
      />
      <Input
        label='Profile Image'
        name='image'
        value={inputs.image}
        onChange={handleChange}
      />
      <button type='submit'>Submit</button>
    </form>
  </div>
}