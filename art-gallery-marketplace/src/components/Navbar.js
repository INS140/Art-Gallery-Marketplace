import { Link } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'


export default function MainNav() {
  return <nav className="navbar navbar-expand bg-light p-2">
    <div className="container-fluid">
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
      <div className="search flex mx-5">
        <AiOutlineSearch className='searchIcon text-dark' />
        <input type='text' placeholder='Search...' />
      </div>
      <Link className="nav-link navbar-right btn btn-dark px-3 py-2" to="/cart">Cart</Link>
    </div>
  </nav>
}