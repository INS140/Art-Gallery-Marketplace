import useFetch from "./custom-hooks/useFetch"
import { Link, useNavigate } from "react-router-dom"

export default function CommissionItem({commission}){
    const { title, name, due_date, price, description, _id } = commission

    const date = new Date(due_date)
    const dateDisplay = `${date.getMonth()}/${date.getDay()}/${date.getFullYear()}`

    const { remove } = useFetch()

    const navigate = useNavigate()

    const handleDelete = async () => {
        await remove(`/commissions/${_id}`)

        navigate(0)
    }

    return <div className="bg-secondary mx-auto w-75 m-2 p-2 text-center">
        <h1>Title: {title}</h1>
        <p>Name of requester: {name}</p>
        <p>Commission due date: {dateDisplay} </p>
        <p>Commission price: {price}</p>
        <p>Commission description: {description}</p>
        <div className="d-flex justify-content-around">
            <Link to={`commission/update/${_id}`}>
                <button className="btn btn-light p-1">Update</button>
            </Link>
            <button className="btn btn-dark p-1" onClick={handleDelete}>Delete</button>
        </div>
    </div>
}
