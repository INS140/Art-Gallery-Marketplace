import { Link } from "react-router-dom";
import useFetch from './custom-hooks/useFetch'

export default function CartView() {
    const { get } = useFetch()

    return(
        <div className="cart-container">
            <h1 className="text-light text-center">Your cart is empty.</h1>
            {/* <Link className="nav-link" to="/AboutUs">Cart</Link> */}
            { }
        </div>
    )
}

