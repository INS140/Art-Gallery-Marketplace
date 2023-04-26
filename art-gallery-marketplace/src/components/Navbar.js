import { Link } from "react-router-dom"

export default function MainNav() {
  return (
    <nav className="navbar navbar-expand bg-light p-2">
      <Link className="navbar-brand nav-link active" to="/"><img width={"27px"} height={"27px"} src="./images/Art-Mart-Favicon-2.jpg" /> Art-Mart</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">        
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-link" to="/artists">Artists</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/images">Images</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
/*
 <nav className="navbar navbar-expand-lg bg-light p-2">
      <Link className="navbar-brand nav-link active" to="/"><img src="https://placekitten.com/50/50" />Art-Mart</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">        <ul className="navbar-nav">
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="/artists" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Artists
            </Link>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item nav-link" to="/artists">Annie Lam</Link>
              <Link className="dropdown-item nav-link" to="/artists">Isaac Saettel</Link>
              <Link className="dropdown-item nav-link" to="/artists">Lorraine Ortiz</Link>
              <Link className="dropdown-item nav-link" to="/artists">Mal Martin</Link>
              <Link className="dropdown-item nav-link" to="/artists">Zane Matero</Link>
              <li class="dropdown-divider"></li>
              <Link class="dropdown-item nav-link" to="/createArtist">Create Artist</Link>
            </ul>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/images">Images</Link>
          </li>
        </ul>
      </div>
    </nav>
     */