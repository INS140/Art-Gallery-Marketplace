import ArtistView from "./ArtistView";
import Navbar from "./Navbar";
import CommissionForm from "./CommissionForm";
import Footer from "./Footer";

export default function ArtistContainer(){
    return(
        <div>
            <Navbar/>
            <ArtistView/>
            <CommissionForm/>
            <Footer/>
        </div>
    )
}