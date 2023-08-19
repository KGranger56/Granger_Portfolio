import React from 'react';
import './Footer.css';

function Footer(){
  return (
    <div className="footer">
      <div className="footer-table">
        <ul className="footer-row-1">
          <li>English (US)</li>
          <li>Español</li>
          <li>Français (France)</li>
          <li>中文(简体)</li>
          <li>لعربية</li>
          <li>Português (Brasil)</li>
          <li>Italiano</li>
          <li>한국어</li>
          <li>Deutsch</li>
          <li>हिन्दी</li>
          <li>日本語</li>
          <li><button className="footer-button">+</button></li>
        </ul>
        <hr className='languageBar'/>
        <ul className="footer-row-2">
          <li>Sign Up</li>
          <li>Log In</li>
          <li>Messenger</li>
          <li>Facebook Lite</li>
          <li>Watch</li>
          <li>Places</li>
          <li>Games</li>
          <li>Marketplace</li>
          <li>Meta Pay</li>
          <li>Meta Store</li>
          <li>Meta Quest</li>
          <li>Instagram</li>
          <li>Threads</li>
          <li>Fundraisers</li>
        </ul>
        <ul className="footer-row-3">
          <li>Services</li>
          <li>Voting Information Center</li>
          <li>Privacy Policy</li>
          <li>Privacy Center</li>
          <li>Groups</li>
          <li>About</li>
          <li>Create ad</li>
          <li>Create Page</li>
          <li>Developers</li>
          <li>Careers</li>
          <li>Cookies</li>
          <li>Ad choices</li>
        </ul>
        <ul className="footer-row-4">
          <li>Terms</li>
          <li>Help</li>
          <li>Contact Uploading & Non-Users</li>
        </ul>
        <br/>
        <ul className="footer-row-5">
          <li>Meta © 2023</li>

        </ul>
      </div>
    </div>
  )
}

export default Footer;