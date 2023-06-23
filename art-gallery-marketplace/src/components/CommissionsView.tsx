import { useOutletContext } from "react-router-dom"
import CommissionGallery from "./CommissionGallery"
import NewCommission from "./NewCommission"
import React from "react"

export default function CommissionsView() {
    const { artist } = useOutletContext<any>()

    return <>
        <h2 style={{textAlign: "center"}}>Artist's Current Commissions:</h2>
        <CommissionGallery commissions={artist.commissions}/>
        <NewCommission />
    </>
}