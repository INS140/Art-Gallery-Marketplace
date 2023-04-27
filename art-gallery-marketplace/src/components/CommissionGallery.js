import CommissionItem from "./CommissionItem"
import "./css/commissions.css"

export default function CommissionGallery({commissions}) {
    return <div className="p-3 commission-card bg-light rounded-4">
        <div className="commission-container">
            {!commissions?.length
                ? <h1 className="text-center text-dark">This artist currently has no commissions.</h1>
                : commissions.map(commission => {
                    return <CommissionItem commission={commission} key={commission._id}/>
                })
            }
        </div>
    </div>
}
