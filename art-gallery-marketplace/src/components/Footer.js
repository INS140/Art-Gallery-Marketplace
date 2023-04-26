import './css/footer.css'
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"

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
    <p>Copyright © 2023 Art-Mart Platforms, Inc.</p>
    <img src='./images/FlagIcon.svg' alt='US' />
    <span>&nbsp; United States &nbsp; | &nbsp; English (US) &nbsp; | &nbsp; $ (USD)</span>
    
<div className="social">
      <AiFillTwitterCircle className="icon" style={{padding:"auto", margin: "5px"}} />
      <BsFacebook className="icon" style={{padding:"auto", margin: "5px"}}/>
      <RiInstagramFill className="icon" style={{padding:"auto", margin: "5px"}}/>
      <BsLinkedin className="icon" style={{padding:"auto", margin: "5px"}}/>
    </div>
    <div>
      <ul className="list-inline">
        <li className="list-unstyled list-inline-item">
          <a href="#">Terms of Use</a>
        </li>
        <li className="list-unstyled list-inline-item">
          <a href="#">Privacy</a>
        </li>
        <li className="list-unstyled list-inline-item">
          <a href="#">Interest-based ads</a>
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
   

