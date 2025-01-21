/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useLocation, NavLink } from 'react-router-dom';  // Importeer NavLink
import '../css/components/NavBar.css';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    // Achtergrond aanpassen afhankelijk van de route
    switch (location.pathname) {
      case '/':
        document.body.className = 'home-background';
        break;
      case '/about':
        document.body.className = 'about-background';
        break;
      case '/contact':
        document.body.className = 'contact-background';
        break;
      case '/practical':
        document.body.className = 'practical-background';
        break;
      default:
        document.body.className = ''; 
        break;
    }
  }, [location]);

  const getMenuItems = () => {
    switch (location.pathname) {
      case '/about':
        return (
          <>
            <NavLink to="/" onClick={toggleMenu} className="menu-item">
              Home
            </NavLink>
            <NavLink to="/practical" onClick={toggleMenu} className="menu-item">
              Praktisch
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className="menu-item">
              Contacteer
            </NavLink>
          </>
        );
      case '/contact':
        return (
          <>
            <NavLink to="/" onClick={toggleMenu} className="menu-item">
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="menu-item">
              Wie ben ik?
            </NavLink>
            <NavLink to="/practical" onClick={toggleMenu} className="menu-item">
              Praktisch
            </NavLink>
          </>
        );
      case '/practical':
        return (
          <>
            <NavLink to="/" onClick={toggleMenu} className="menu-item">
              Home
            </NavLink>
            <NavLink to="/about" onClick={toggleMenu} className="menu-item">
              Wie ben ik?
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className="menu-item">
              Contacteer
            </NavLink>
          </>
        );
      default:
        return (
          <>
            <NavLink to="/about" onClick={toggleMenu} className="menu-item">
              Wie ben ik?
            </NavLink>
            <NavLink to="/practical" onClick={toggleMenu} className="menu-item">
              Praktisch
            </NavLink>
            <NavLink to="/contact" onClick={toggleMenu} className="menu-item">
              Contacteer
            </NavLink>
          </>
        );
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <button onClick={toggleMenu} className="menu-button">
          {menuOpen ? (
            // Close icon (X)
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      {menuOpen && (
        <div className="menu">
          {getMenuItems()}
        </div>
      )}
    </nav>
  );
};

export default NavBar;
