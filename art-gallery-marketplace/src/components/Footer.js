import { Link } from 'react-router-dom'
import './css/footer.css'

export default function Footer(){
  return <div className="bg-dark text-secondary">
    <hr></hr>
    <h3>Contributors:</h3>
    <ul className="list-unstyled">
      <li>Annie Lam</li>
      <li>Isaac Saettel</li>
      <li>Lorraine Ortiz</li>
      <li><a href='https://github.com/MalMWare'>Mal Martin</a></li>
      <li><a href='https://www.linkedin.com/in/zmatero/'>Zane Matero</a></li>
    </ul>
    <p className='left'>Copyright © 2023 Art-Mart Platforms, Inc.</p>
    <img src='./images/FlagIcon.svg' alt='US' />
    <span>&nbsp; United States &nbsp; | &nbsp; English (US) &nbsp; | &nbsp; $ (USD)</span>
    <div>
      <ul className="list-inline">
        <li className="list-unstyled list-inline-item">
          <a href="#">Terms of Use</a>
        </li>
        <li className="list-unstyled list-inline-item">
          <a href="#">Privacy</a>
        </li>
        <li className="list-unstyled list-inline-item">
          <Link to="join-us">Join Us</Link>
        </li>
        <li className="list-unstyled list-inline-item">
          <a href="#">Local Shops</a>
        </li>
        <li className="list-unstyled list-inline-item">
          <a href="#">Region</a>
        </li>  
      </ul>
    </div>
  </div>
}
   