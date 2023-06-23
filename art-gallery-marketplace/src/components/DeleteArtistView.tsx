import React from "react";
import useFetch from "./custom-hooks/useFetch";
import { useParams, useNavigate, Link } from "react-router-dom";

export default function DeleteArtistView () {
  const params = useParams()
  const { remove } = useFetch()
  const navigate = useNavigate()

  async function handleDelete() {
    await remove(`/artists/${params.id}`)
    navigate(`/artists`)
  }

  return <div className="bg-dark text-secondary" style={{minHeight: "70vh"}}>
    <div className="card" style={{width: "50vw", margin:"auto", marginTop:"35vh"}}>
      <div className="card-body text-center">
        <h2>Are you sure you want to delete artist?</h2>
        <div className="d-flex justify-content-center gap-5 ">
          <button className="btn btn-danger" onClick={handleDelete}>Yes</button>
          <Link to={`/artists/${params.id}`}>
            <button className="btn btn-light">No</button>
          </Link>
        </div>
      </div>
    </div>
  </div>
}