import { Link } from "react-router-dom"

export default function Navbar(){
    return(
      <nav class="navbar navbar-expand-lg navbar-light bg-light p-2">
      <Link class="navbar-brand" to="/"><img src="https://placekitten.com/50/50"/>Art-Mart</Link>
      <div class="navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <Link class="nav-link" to="/artists">Artists</Link>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/images">Images</Link>
          </li>
        </ul>
      </div>
    </nav>
    )
   }
   