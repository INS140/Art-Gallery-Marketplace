import CommissionItem from "./CommissionItem"
import "./css/commissions.css"

export default function CommissionGallery({commissions}) {
    return <div className="p-2 commission_container bg-light rounded-4">
        {!commissions?.length ?<h1 style={{textAlign: "center", width:"100vw"}}>This artist currently has no commissions.</h1> : commissions.map(commission => {
            return <CommissionItem commission={commission}/>
        })}
    </div>
}
