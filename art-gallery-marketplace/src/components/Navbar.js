import { Link } from "react-router-dom"

export default function Navbar(){
  return <nav className="navbar navbar-expand-lg navbar-light bg-light p-2">
    <Link className="navbar-brand" to="/"><img src="https://placekitten.com/50/50"/>Art-Mart</Link>
    <div className="navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <Link className="nav-link" to="/artists">Artists</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/images">Images</Link>
        </li>
      </ul>
    </div>
  </nav>
}
   