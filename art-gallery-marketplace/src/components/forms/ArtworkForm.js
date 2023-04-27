import Input from '../ui-kit/Input'
import TextArea from '../ui-kit/TextArea'
import useFormHandler from "../custom-hooks/useFormHandler";
import useFetch from '../custom-hooks/useFetch';

export default function ArtworkForm(props) {
  const { post } = useFetch()
  const { inputs, handleChange } = useFormHandler({
    title: '',
    pic: '',
    artist: '',
    description: '',
    price: 0,
    year: '',
    style: '',
    size: '',
    sold: false,
    copies: 1
  })

  const { legend, onSubmit } = props

  // const handleSubmit = async e => {
  //   e.preventDefault()

  //   const { title, price, year, style, size, copies, pic, description } = e.target

  //   const data = await post('/artworks', {
  //     artist: '64420b0b403305b28b482d7b', //change to current artist id
  //     title: title.value,
  //     price: price.value,
  //     year: year.value,
  //     style: style.value,
  //     size: size.value,
  //     copies: copies.value,
  //     pic: pic.value,
  //     description: description.value
  //   })
  // }

  return <div>
    <h1 className='text-secondary' style={{textAlign:"center"}}>Add Artwork</h1>
    <form onSubmit={onSubmit}>
      <legend>{legend}</legend>
      <fieldset className='quad'>
        <Input
          label='Title'
          name='title'
          value={inputs.title}
          onChange={handleChange}
          required
        />
        <Input
          label='Price'
          name='price'
          type='number'
          value={inputs.price}
          onChange={handleChange}
          required
        />
        <Input
          label='Year'
          name='year'
          type='month'
          value={inputs.year}
          onChange={handleChange}
        />
        <Input
          label='Style'
          name='style'
          value={inputs.style}
          onChange={handleChange}
        />
      </fieldset>
      <fieldset className='double'>
        <Input
          label='Size'
          name='size'
          value={inputs.size}
          onChange={handleChange}
          required
        />
        <Input
          label='Copies'
          name='copies'
          type='number'
          value={inputs.copies}
          onChange={handleChange}
        />
      </fieldset>
      <Input
        label='Image Url'
        name='pic'
        value={inputs.pic}
        onChange={handleChange}
        required
      />
      <TextArea
        label='Description'
        name='description'
        value={inputs.description}
        onChange={handleChange}
        required
        rows={5}
      />
      <button className="btn btn-light" type='submit'>Submit</button>
    </form>
  </div>
}