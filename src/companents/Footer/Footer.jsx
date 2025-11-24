import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-section">
          <h3>MyShop</h3>
          <p>Best products with premium quality and fast delivery.</p>

          <div className="footer-socials">
            <i className="fa-brands fa-telegram"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-youtube"></i>
          </div>
        </div>

        <div className="footer-section">
          <h4>Pages</h4>
          <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
        </div>

        <div className="footer-section">
          <h4>Support</h4>
          <a href="#">Help Center</a>
          <a href="#">FAQ</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>

        <div className="footer-section">
          <h4>Contact</h4>
          <p><i className="fa-solid fa-phone"></i> +998 90 123 45 67</p>
          <p><i className="fa-solid fa-envelope"></i> support@myshop.com</p>
          <p><i className="fa-solid fa-location-dot"></i> Tashkent, Uzbekistan</p>
        </div>

      </div>

      <div className="footer-bottom">
        © 2025 MyShop. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
