import Input from '../ui-kit/Input'
import TextArea from '../ui-kit/TextArea'
import useFormHandler from "../custom-hooks/useFormHandler"
import React from 'react'

export default function ArtworkForm(props: any) {
  const { legend, onSubmit, formInputs } = props

  const fI = formInputs ? formInputs : {
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
  }

  const { inputs, handleChange } = useFormHandler(fI)

  return <form onSubmit={onSubmit}>
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
}