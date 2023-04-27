import ArtistView from "./ArtistView";
import CommissionForm from "./forms/CommissionForm";
import { Link } from "react-router-dom";
import CommissionGallery from "./CommissionGallery"
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './custom-hooks/useFetch';

export default function ArtistContainer(){
    const { get } = useFetch()

    const [data, setData] = useState([])

    const params = useParams()
    useEffect(() => {
        (async () => {const data = await get(`/artists/${params.id}`)
        setData(data)
        })()
    }, [])
    return(
        <div>
            <ArtistView artist={data}/>
            <h3 style={{textAlign:"center"}} className="text-secondary mt-3">Click &nbsp;
            <Link to="/artwork-form" className="btn btn-primary">Here</Link> &nbsp;to add more artwork to your page!</h3>
            <hr></hr>
            <h2 style={{textAlign: "center"}}>Artist's Current Commissions:</h2>
            <CommissionGallery commissions={data.commissions}/>
            <CommissionForm/>
            <div className="d-flex justify-content-center gap-3">
                <Link to={`/artists/update/${params.id}`}>
                    <button className="btn btn-primary">Update Profile</button>
                </Link>
                <Link to={`/artists/delete/${params.id}`}>
                    <button className="btn btn-danger">Delete Profile</button>
                </Link>
            </div>
        </div>
    )
}