import { Link } from "react-router-dom"

export default function AboutUs() {
    return (
        <div className="bg-dark text-secondary">
            <hr></hr>
            <div class="card" style={{width: "75vw", height:"75vh", margin:"auto"}}>
                <img class="card-img-top" src="https://placekitten.com/400/200" alt="Card image cap" style={{width: "70vw", height:"50vh", margin:"auto"}}/>
                    <div class="card-body">
                        <h5 class="card-title">About Us:</h5>
                        <p class="card-text">Our vision at Art-Mart is to bring together both artists and art-lovers, to a place where we can all appreciate one passion. We have provided a platform for artist's to gain exposure and sell their pieces, and for the rest of us to find new tastes and maybe even a new decorative piece for our home! We encourage all artist's to show off their work on our website.</p>
                        <Link to="/images" class="btn btn-dark">Let's Browse!</Link>
                    </div>
            </div>
        </div>
    )
}