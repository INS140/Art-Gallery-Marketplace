import { useState } from "react";

export default function useFormHandler(values: any) {
  const [inputs, setInputs] = useState(values)

  const handleChange = (e: Event) => {
    const { value, name }: any = e.target
    setInputs({...inputs, [name]: value})
  }

  return { inputs, handleChange }
}