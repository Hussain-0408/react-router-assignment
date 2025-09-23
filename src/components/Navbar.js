import React from 'react';
import '../styles/Navbar.css'
import logo from './image/logo.jpg'

import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div>
      <nav className="navbar shadow-lg navbar-expand-lg fixed-top navbar-dark custom-navbar">
        <div className="container-fluid">
        
          <Link className="navbar-brand d-flex  w-25  align-items-center" to="/">
            <img 
              src= {logo}
              alt="Logo"
              width="50"
              height="50"
              className="d-inline-block align-text-top me-3 rounded-3"
            />
            <span className="school-name">My App</span>
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navbar Links */}
          <div className="collapse navbar-collapse  w-50 justify-content-center" id="navbarNav">
            <ul className="navbar-nav  justify-content-around align-item-center w-50 gap-5">
              <li className="nav-item">
                <Link className="nav-link " to="/">Home</Link>
              </li>
              <li className="nav-item"><Link className="nav-link" to="/About">About</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="/user">User Info</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar
