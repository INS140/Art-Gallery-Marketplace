import { Link } from 'react-router-dom'
import './css/footer.css'
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsFacebook, BsLinkedin } from "react-icons/bs"
import { RiInstagramFill } from "react-icons/ri"
import React from 'react'

export default function Footer(){
  return <div className="bg-dark text-secondary m-2">
    <hr></hr>
    <h3 className='text-center'>Contributors:</h3>
    <ul className="list-inline text-center">
      <li className="list-unstyled list-inline-item"><a href='https://github.com/annielam0623' target='_blank'> Annie Lam </a></li>
      | &nbsp;
      <li className="list-unstyled list-inline-item"><a href='https://www.linkedin.com/in/isaac-saettel-110a76262/' target='_blank'> Isaac Saettel</a></li>
      | &nbsp;
      <li className="list-unstyled list-inline-item"><a href='https://github.com/leslieportiz' target='_blank'>Lorraine Ortiz</a></li>
      | &nbsp;
      <li className="list-unstyled list-inline-item"><a href='https://github.com/MalMWare' target='_blank'>Mal Martin</a></li>
      | &nbsp;
      <li className="list-unstyled list-inline-item"><a href='https://www.linkedin.com/in/zmatero/' target='_blank'>Zane Matero</a></li>
    </ul>
    <p className='left'>Copyright © 2023 Art-Mart Platforms, Inc.</p>
    <div className='text-center'>
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
  </div>
}
