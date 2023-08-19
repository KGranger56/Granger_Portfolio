import React from "react"
import { Link } from 'react-router-dom'

class NavBar extends React.Component {
    render(){ 
      return (
        <nav>
          <ul>
            <li>
              <Link to="/LandingPage" className="NavLandingPage"></Link>
            </li>
            <li>
              <Link to="/ForgotPassword" className="NavForgotPassword"></Link>
            </li>
            <li>
              <Link to="/LogIn" className="NavLogIn"></Link>
            </li>
          </ul>
        </nav>
    ) 
    }
}

export default NavBar