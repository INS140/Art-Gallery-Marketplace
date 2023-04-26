import ArtistView from "./ArtistView";
import CommissionForm from "./forms/CommissionForm";
import { Link } from "react-router-dom";

export default function ArtistContainer(artist){
    return(
        <div>
            <ArtistView key={artist.id} artist={artist}/>
            <h3 className="text-secondary">Click
            <Link to="/artwork-form" className="btn btn-primary">Here</Link> to add more artwork to your page!</h3>
            <CommissionForm/>
        </div>
    )
}