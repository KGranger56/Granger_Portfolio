import React from "react"
import './LandingPage.css'

import { Link } from 'react-router-dom';

{/*import {Routes, Route, useNavigate} from 'react-router-dom';*/}

export default function LandingPage() {
  return(
    <div className="landing-page">
      <div className="col-1">
        <h1>facebook</h1>
        <h2>Connect with friends and the <br/>
        world around you on Facebook.</h2>
      </div>
      <div className="col-2">
        <form className="signin-info">
          <input type="text" id="email-phone" name="email-phone"placeholder='Email or phone number'/>
          <br/>
          <input type="text" id="password" name="password" placeholder='Password'/>
          <br/>
          <Link to='/LogIn' className="log-in-btn">Log In</Link>
          <Link to='/ForgotPassword' className="forgot-password">Forgot Password?</Link>
          <hr className="loginBar"/>
          <button className="new-account"><b>Create New account</b></button>
        </form>
        <br/>
        <div className="create-a-page"><b>Create a Page</b> for a celebrity, brand or business.</div>
      </div>
    </div>
  );
}