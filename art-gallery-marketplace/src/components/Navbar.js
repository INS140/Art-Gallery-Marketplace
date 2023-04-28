import { NavLink } from "react-router-dom"
import { AiOutlineSearch } from 'react-icons/ai'
import { CartContext } from "./context/CartContext"
import { useContext } from "react"


export default function MainNav() {
  const { cart } = useContext(CartContext)

  const getClassItem = ({isActive}) => {
    return `nav-link ${isActive ? 'bg-dark text-light' : ''}`
  }

  const getClassBrand = ({isActive}) => {
    return `navbar-brand nav-link ${isActive ? 'bg-dark text-light' : ''}`
  }

  return <nav className="navbar navbar-expand bg-light p-2">
    <div className="container-fluid">
      <NavLink style={{padding: 'auto 10px'}} className={getClassBrand} to="/">
        <img width={"27px"} height={"27px"} src="./images/Art-Mart-Favicon-2.jpg" />
        &nbsp; Art-Mart
      </NavLink>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">        
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className={getClassItem} to="/artists">Artists</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className={getClassItem} to="/artworks">Artworks</NavLink>
          </li>
        </ul>
      </div>
      <div className="search flex mx-5">
        <AiOutlineSearch className='searchIcon text-dark' />
        <input type='text' placeholder='Search...' />
      </div>
      <NavLink className="nav-link navbar-right btn btn-dark px-3 py-2" to="/cart">
        Cart {!cart.length ? '' : `(${cart.reduce((s,i) => s+i.quantity, 0)})`}
      </NavLink>
    </div>
  </nav>
}