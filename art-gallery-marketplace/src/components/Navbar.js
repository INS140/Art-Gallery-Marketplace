import { Link } from "react-router-dom"

export default function Navbar(){
  return <nav className="navbar navbar-expand-lg navbar-light bg-primary">
    <Link className="navbar-brand" to="/">Art-Mart</Link>
    <div className="collapse navbar-collapse" id="navbarNav">
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
   