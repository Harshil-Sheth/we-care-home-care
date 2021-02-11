import React from 'react';
import image from './logo.svg';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './navbar.styles.js';
  import "./navbar.styles.css"



const Navbar = () => {
    return (
        <div className='navbar1'>
            <Nav>
        <NavLink to='/'>
          <img src={image} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' >
            About
          </NavLink>
          <NavLink to='/services' >
            Services
          </NavLink>
          <NavLink to='/contact-us' >
            Contact Us
          </NavLink>
          <NavLink to='/sign-up' >
            Sign Up
          </NavLink>
          {/* Second Nav */}
          <NavBtn >
          <NavBtnLink className="button" to='/sign-in'>Sign In</NavBtnLink>
          </NavBtn>
          <nav className="navbar navbar-expand-lg navbar-dark">
  <div className="container-fluid">
    <ul className="navbar-nav">
      {/* <!-- Avatar --> */}
      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle d-flex align-items-center"
          href="#"
          id="navbarDropdownMenuLink"
          role="button"
          data-mdb-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg"
            className="rounded-circle"
            height="22"
            alt=""
            loading="lazy"
          />
        </a>
        <ul className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
          <li><a className="dropdown-item" href="#">My profile</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Logout</a></li>
        </ul>
      </li>
    </ul>
  </div>
</nav>
        </NavMenu>
        
        {/* <NavBtn>
          <NavBtnLink to='/signin'>Sign In</NavBtnLink>
        </NavBtn> */}
      </Nav>
        </div>
    )
}

export default Navbar
