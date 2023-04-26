export default function CommissionItem({commission}){
    return <div className="bg-secondary mx-auto w-75 m-2 p-2 text-center">
        <h1>Title: {commission.title}</h1>
        <p>Name of requester: {commission.name}</p>
        <p>Commission due date:{commission.due_date}</p>
        <p>Commission price: {commission.price}</p>
        <p>Commission description: {commission.description}</p>
    </div>
}
