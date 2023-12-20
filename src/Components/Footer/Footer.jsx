import React from 'react'
import './Footer.css'
import instagram_icon from '../Assets/instagram_icon.png'
import pinterest_icon from '../Assets/pinterest_icon.png'
import whatsapp_icon from '../Assets/whatsapp_icon.png'
import G_Logo from '../Assets/G_Logo.png'

const Footer = () => {
  return (
    <div className='footer'>

        <div className="footer-logo">
            <img src={G_Logo} width={300} height={300} alt="" />
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact Us</li>
        </ul>
        <div className="footer-social-icon">
            <div className="footer-icons-container">
                <img src={instagram_icon} alt="" />
            </div>
            
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt="" />
            </div>
           
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt="" />
            </div>


        </div>
        <div className="footer-copyright">
            <hr />
            <p>Copyright @ 2023 -  All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer