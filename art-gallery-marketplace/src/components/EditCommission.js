import useFetch from "./custom-hooks/useFetch";
import CommissionForm from "./forms/CommissionForm";
import { useNavigate, useOutletContext, useParams } from 'react-router-dom'

export default function EditCommission() {
  const { put } = useFetch()
  
  const navigate = useNavigate()

  const params = useParams()
  
  const { artist } = useOutletContext()

  const commission = artist
    ? artist.commissions.find(c => c._id === params.commissionId)
    : {}

  const handleSubmit = async e => {
    e.preventDefault()

    const {name, title, description, price, due_date} = e.target

    await put(`/commissions/${params.commissionId}`, {
      name: name.value,
      artist: artist._id,
      title: title.value,
      description: description.value,
      price: price.value,
      due_date: due_date.value
    })

    navigate(`/artists/${artist._id}`)
  }
  
  return <>
    <CommissionForm
        legend='Update Commission'
        onSubmit={handleSubmit}
        formInputs={{
            name: commission.name,
            description: commission.description,
            title: commission.title,
            price: commission.price,
            due_date: commission.due_date
        }}
    />
  </>
}