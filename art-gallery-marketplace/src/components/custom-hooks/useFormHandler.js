import { useState } from "react";

export default function useFormHandler(values) {
  const [inputs, setInputs] = useState(values)

  const handleChange = e => {
    const { value, name } = e.target
    setInputs({...inputs, [name]: value})
  }

  return { inputs, handleChange }
}