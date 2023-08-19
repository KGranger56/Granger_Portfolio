import React from "react"
import './ForgotPassword.css'

import { Link } from 'react-router-dom';

export default function ForgotPassword() {
  return(
    <div className="forgot-password">
      <div className="forgot-password-header-row">
        <div><Link to='/'><h1 className="forgot-password-facebook-title">facebook</h1></Link></div>
        <div className="header-second-half">
          <input type="text" id="forgot-password-email-phone" name="email-phone"placeholder='Email or phone'/>
          <input type="text" id="forgot-password-password" name="password" placeholder='Password'/>
          <Link to='/LogIn'><button className="forgot-password-log-in-btn">Log In</button></Link>
          <div className="forgot-account">Forgot Account?</div>
        </div>
      </div>
      <div className="forgot-password-body">
        <div className="row-1">Find your account</div>
        <hr className="forgot-password-hr"/>
        <div className="row-2">Please enter your email or mobile number to search for your <br/>account.</div>
        <input type="text" className="row-3" placeholder="Email or mobile number"/>
        <hr className="forgot-password-hr"/>
        <div className="row-4"><button className="cancel">Cancel</button><button className="search">Search</button></div>
      </div>
    </div>
  );
}
