import ArtistItem from "./ArtistItem"
import { Link } from "react-router-dom"

export default function ArtistGallery(){
  const createGrid = () => {
      let grid = []
      for (let i = 0; i < 9; i++) {
        grid.push(
          <ArtistItem key={i} />
        )
      }
      return (
        <div>
          {grid}
        </div>
      )
  }
  return <div className='m-2'>
    <h1 className="text-light" style={{textAlign: "Center"}}>Artists</h1>
    <hr></hr>
    <h3 className="text-secondary">
      Not an artist? Want to be? Click &nbsp;
      <Link to="/join-us" className="btn btn-primary">Here</Link>
      &nbsp; to make your artist page!
    </h3>
    <hr></hr>
    {createGrid()}
  </div>
}