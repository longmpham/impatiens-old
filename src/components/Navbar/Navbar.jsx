// rafce

// Navbar -> Home (Logo) || About || Products || Socials || Login || Sidebar
// - Later - Shopping cart stuff
// - Later - Login
import React from 'react'
import './Navbar.css'
import logo from '../../images/logo193.png'

const Navbar = () => {
  return (
    <div>Navbar
        <nav>
            <img src={logo} alt="logo.png" className="nav-logo"/>
            <ul>
                <li className="nav-right-menu">About</li>
                <li className="nav-right-menu">Products</li>
                <li className="nav-right-menu">Socials</li>
                <li className="nav-right-menu">Login</li>
            </ul>
        </nav>

    </div>
  )
}

export default Navbar