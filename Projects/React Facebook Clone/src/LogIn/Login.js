import React from "react";
import "./Login.css";

import { Link } from 'react-router-dom';

export default function Login() {
  return(
    <div className="log-in">
      <Link to='/' className="LogIn-h1"><h1>facebook</h1></Link>
      <form className="log-in-card">
        <h3>Log Into Facebook</h3>
        <input type="text" id="email-phone" name="email-phone"placeholder='Email or phone number' />
        <br/>
        <p>The email or mobile number you entered isn't connected to an <br/>
        account. <b>Find your account and log in.</b></p>
        <br/>
        <input type="text" id="password" name="password" placeholder='Password'/>
        <br/>
        <button className="log-in-btn">Log In</button>
        <Link to='/ForgotPassword' className="forgot-password">Forgot Password?</Link>
      </form>
    </div>
  )
}