import React from "react";
import useFetch from "./custom-hooks/useFetch";
import CommissionForm from "./forms/CommissionForm";
import { useNavigate, useOutletContext } from 'react-router-dom'

export default function NewCommission() {
  const { post } = useFetch()
  
  const navigate = useNavigate()
  
  const { artist } = useOutletContext<any>()

  const handleSubmit = async (e: Event) => {
    e.preventDefault()

    const {name, title, description, price, due_date}: any = e.target

    await post('/commissions', {
      name: name.value,
      artist: artist._id,
      title: title.value,
      description: description.value,
      price: price.value,
      due_date: due_date.value
    })

    navigate(0)
  }
  
  return <CommissionForm legend='Request A Commission' onSubmit={handleSubmit} />
}