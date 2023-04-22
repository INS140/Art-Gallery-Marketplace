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

  const { post } = useFetch()

  const handleChange = e => {
    const { value, name } = e.target
    setInputs({...inputs, [name]: value})
  }

  const handleSubmit = e => {
    e.preventDefault()
    const {name, description, dueDate} = e.target
    /* I have these destructured for ease of use later,
    but will have to build the submit functionality
    after the backend is finished. */
    console.log(name.value, description.value, dueDate.value)
  }

  return <div className='form-container'>
      <form onSubmit={handleSubmit}>
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
