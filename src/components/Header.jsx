import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Container } from 'react-bootstrap';




function Header() {
    return (
        <header className="navbar navbar-expand-lg navbar-light"
        style={{
          background: "#ca5292",
        }}> 
        
        <nav className="container-fluid">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/home" activeClassName="active">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/About" activeClassName="active">
                About
              </NavLink>  
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Formation" activeClassName="active">
                Formation 
              </NavLink>  
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Experience" activeClassName="active">
                Experiences 
              </NavLink>  
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Certifications" activeClassName="active">
               Certifications
              </NavLink></li>
          
           
            <li className="nav-item">
              <NavLink className="nav-link" to="/Contact" activeClassName="active">
                Contact
              </NavLink></li>
            </ul>
       
        </nav>
      </header>
  );
  }
  
  const Footer = () => {
    return (
      <footer className="bg-light text-center text-lg-start">
        <p className="text-center p-3">© {new Date().getFullYear()} Mon application</p>
      </footer>
    );
  };
  
  export { Header, Footer };