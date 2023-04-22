import { useState } from "react"
import Input from "../ui-kit/Input"
import TextArea from "../ui-kit/TextArea"
import useFetch from "../custom-hooks/useFetch"
import '../css/commission-form.css'

export default function CommissionForm() {
  const [inputs, setInputs] = useState({
    name: '',
    description: '',
    title: '',
    price: 0,
    dueDate: ''
  })

  const { get, post } = useFetch()

  const handleChange = e => {
    const { value, name } = e.target
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const {name, title, description, price, dueDate} = e.target

    post('/commissions/', {
      name: name.value,
      artist: '64420b0b403305b28b482d7c',
      title: title.value,
      description: description.value,
      price: price.value,
      dueDate: dueDate.value
    })
  }

  return <div className='form-container'>
      <form onSubmit={handleSubmit} method="POST">
        <legend>Request a Commission</legend>
        <Input
          label='Name'
          name='name'
          value={inputs.name}
          onChange={handleChange}
          required
        />
        <Input
          label='Title'
          name='title'
          value={inputs.title}
          onChange={handleChange}
        />
        <TextArea
          label='Description'
          name='description'
          value={inputs.description}
          onChange={handleChange}
          required
          rows={5}
        />
        <fieldset className="double">
          <Input
            label='Asking Price'
            type='number'
            name='price'
            value={inputs.price}
            onChange={handleChange}
          />
          <Input
            label='Due Date'
            type='date'
            name='dueDate'
            value={inputs.dueDate}
            onChange={handleChange}
          />
        </fieldset>
        <button type="submit">Submit</button>
      </form>
  </div>
}
