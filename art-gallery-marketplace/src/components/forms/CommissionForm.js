import Input from "../ui-kit/Input"
import TextArea from "../ui-kit/TextArea"
import '../css/commission-form.css'
import useFormHandler from "../custom-hooks/useFormHandler"

export default function CommissionForm(props) {
  const { legend, onSubmit, formInputs } = props

  const fI = formInputs ? formInputs : {
    name: '',
    description: '',
    title: '',
    price: 0,
    due_date: ''
  }
  
  const { inputs, handleChange } = useFormHandler(fI)

  return <div className='form-container'>
      <form onSubmit={onSubmit}>
        <legend>{legend}</legend>
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
            name='due_date'
            value={inputs.due_date}
            onChange={handleChange}
          />
        </fieldset>
        <button className="btn btn-light" type="submit">Submit</button>
      </form>
  </div>
}
