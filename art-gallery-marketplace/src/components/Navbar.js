import { Link } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'


export default function mainNav() {
  return (
    <nav className="navbar navbar-expand bg-light p-2">
      <Link className="navbar-brand nav-link active" to="/"><img src="https://placekitten.com/50/50" />Art-Mart</Link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">        
        <ul className="navbar-nav">
          <li class="nav-item">
            <Link className="nav-link" to="/artists">Artists</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/images">Images</Link>
          </li>
        </ul>
      </div>
      <div className="search flex"  style={{display: 'inline-block'}}>
             <AiOutlineSearch className='searchIcon' style={{colro: "#ccc"}} size={20} />
             <input type='text' placeholder='Search...' style={{border: "1px solid #ccc"}} size={50} />
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