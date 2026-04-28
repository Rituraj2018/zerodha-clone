import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Sticky effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container">

        {/* LOGO */}
        <NavLink to="/" className="logo">
          <img src="/media/images/logo.svg" alt="Zerodha" />
        </NavLink>

        {/* HAMBURGER */}
        <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
          ☰
        </div>

        {/* MENU */}
        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
  <li>
    <NavLink to="/signup" className={({ isActive }) => isActive ? "active" : ""}>
      Sign Up
    </NavLink>
  </li>
  
  <li>
  <NavLink to="/login">Login</NavLink>
</li>

  <li>
    <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
      About
    </NavLink>
  </li>

  <li>
    <NavLink to="/product" className={({ isActive }) => isActive ? "active" : ""}>
      Product
    </NavLink>
  </li>

  <li>
    <NavLink to="/pricing" className={({ isActive }) => isActive ? "active" : ""}>
      Pricing
    </NavLink>
  </li>

  <li>
    <NavLink to="/support" className={({ isActive }) => isActive ? "active" : ""}>
      Support
    </NavLink>
  </li>
</ul>

      </div>
    </nav>
  );
}

export default Navbar;