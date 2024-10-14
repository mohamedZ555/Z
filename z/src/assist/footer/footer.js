import './footer.css'
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
   return (
<>
    <div className='foot'>
    <ul className="frut">
       <li><a href='https://www.facebook.com/clark.maged.9?locale=ar_AR' target='blank'><FaFacebook /> FaceBook</a></li> 
       <li><a href='https://www.instagram.com/dr.clark_maged/' target='blank'><FaInstagram/> Instagram</a></li> 
       <li><a href='https://www.gmail.com/clark.maged.9?locale=ar_AR' target='blank'> <CgMail/> Gmail</a></li> 
       <li><spain className="phoneN"> <FaPhoneAlt/> 01002922153</spain></li> 
    </ul>
    </div>
</>    
)}

export default Footer

