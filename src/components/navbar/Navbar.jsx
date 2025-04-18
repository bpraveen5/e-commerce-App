import React, { useState } from "react";
import "./Navbar.css";
import { FaHeart, FaShoppingCart, FaUser, FaBars, FaTimes, FaSearch } from "react-icons/fa";

import RegisterForm from "../RegisterForm";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdown, setUserDropdown] = useState(false);
  const [categoryDropdown, setCategoryDropdown] = useState(false);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setUserDropdown(false);
    setCategoryDropdown(false);
  };

  const toggleUserDropdown = () => {
    setUserDropdown(!userDropdown);
    setCategoryDropdown(false);
  };

  const toggleCategoryDropdown = () => {
    setCategoryDropdown(!categoryDropdown);
    setUserDropdown(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">E-Shop</div>

      <div className={`nav-links ${mobileMenuOpen ? "active" : ""}`}>
        <div className="nav-item">
          <button>Home</button>
        </div>

        <div
          className="nav-item dropdown"
          onMouseEnter={() => setCategoryDropdown(true)}
          onMouseLeave={() => setCategoryDropdown(false)}
        >
          <button
            className="dropdown-toggle"
            aria-expanded={categoryDropdown}
            aria-label="Toggle Category Dropdown"
          >
            Category
          </button>
          {categoryDropdown && (
            <div className="dropdown-menu">
              <a href="/men">Men</a>
              <a href="/women">Women</a>
              <a href="/kids">Kids</a>
            </div>
          )}
        </div>

        <div className="search-container">
          <input type="text" placeholder="Search products..." />
          <FaSearch className="search-icon" />
        </div>

        <div className="icons">
          <FaHeart className="icon" title="Wishlist" />
          <div className="cart-icon">
            <FaShoppingCart className="icon" title="Cart" />
            <span className="cart-count">2</span>
          </div>

          <div
            className="user-dropdown"
            onClick={toggleUserDropdown}
          >
            <FaUser className="icon" title="User" />
            {userDropdown && (
              <div className="dropdown-menu user-menu">
                <a href="/" className="reg">Register</a>
                
                <a href="/login">Login</a>
              </div>
            )}
          </div>
        </div>
      </div>

      


      <div className="mobile-menu-icon" onClick={toggleMenu}>
        {mobileMenuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
    

    

    
  );
};

export default Navbar;