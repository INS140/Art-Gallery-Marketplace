import ArtistView from "./ArtistView";
import { Link, Outlet } from "react-router-dom";
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './custom-hooks/useFetch';
import React from "react";

export default function ArtistContainer(){
    const { get } = useFetch()

    const [data, setData] = useState<any>([])

    const params = useParams()
    
    useEffect(() => {
        (async () => {const data = await get(`/artists/${params.id}`)
        setData(data)
        })()
    // eslint-disable-next-line
    }, [])

    return <div>
        {!data
            ? <>Loading ...</>
            : <>
            <ArtistView artist={data}/>
        <h3 style={{textAlign:"center"}} className="text-secondary mt-3">
            Click &nbsp;
            <Link to={`/artwork-form/${data._id}`} className="btn btn-primary">Here</Link>
            &nbsp; to add more artwork to your page!
        </h3>
        <hr />
        <Outlet context={{artist: data}} />
        <div className="d-flex justify-content-center gap-3">
            <Link to={`/artists/update/${params.id}`}>
                <button className="btn btn-primary">Update Profile</button>
            </Link>
            <Link to={`/artists/delete/${params.id}`}>
                <button className="btn btn-danger">Delete Profile</button>
            </Link>
        </div>
            </>
        }
    </div>
}