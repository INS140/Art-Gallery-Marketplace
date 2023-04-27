import { useOutletContext } from "react-router-dom"
import CommissionGallery from "./CommissionGallery"
import NewCommission from "./NewCommission"

export default function CommissionsView() {
    const { artist } = useOutletContext()

    return <>
        <h2 style={{textAlign: "center"}}>Artist's Current Commissions:</h2>
        <CommissionGallery commissions={artist.commissions}/>
        <NewCommission />
    </>
}