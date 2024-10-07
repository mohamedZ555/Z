import { useState } from 'react';
import './nav.css';
import img1000 from "../../photo/logo.png"
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";
import React from 'react';
; 


function Nav() {
  
  const [showLoginForm, setShowLoginForm] = useState(false)
  
    return(
      <>
        <div className='navbar'>
          <div className='icon'>
           <Link to="/"><img className='logo' src={img1000} alt=''></img></Link> 
          </div>
          <div className='link'>
          <ul className="Ul">
          <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
                <li><Link to="/News">News</Link></li>
                <li><Link to="/ContactUs">Contact Us</Link></li>
          </ul>
          </div>
          <div><button onClick={()=>setShowLoginForm(!showLoginForm)} className='log'>Log in</button></div>      
          </div>
          <div>{showLoginForm?          <div className="moon">
            <div onClick={()=>setShowLoginForm(!showLoginForm)} className='close'><IoMdCloseCircleOutline /></div>
          <h1 style={{color:"rgb(17, 135, 172)"}}>log in for free</h1>
          <h5 style={{color:"gray"}}>if you have an account</h5>
          <Link to='https://www.facebook.com/'><button className="gf">log in with facebook</button></Link>
          <br></br>
          <Link to="https://www.google.com/intl/ar/gmail/about/"><button className="gf">log in with Gmail</button></Link>
          <br></br>          <input type="text" name="Email" required placeholder="Email"></input>
          <br></br>
          <input type="password" name="pass" minlength="5" maxlength="15" required placeholder="Password"></input>
          <br></br>
          <button className="gf s">Log in</button>
          <p className="fo" style={{color:"rgb(184, 182, 182)"}}>By signing up you accept our Privacy Policy, Terms & Licensing Agreement. Protected by reCAPTCHA. Google Privacy Policy & Terms apply.</p>
          </div>:null}
        </div>
          </>
    );
}
export default Nav