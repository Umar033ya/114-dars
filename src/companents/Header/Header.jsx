import React from 'react'
import './Header.css'
import { NavLink } from 'react-router-dom'
function Header() {
  return (
    <header className="header">
      <div className="logo">
        <i className="fa-solid fa-fire"></i>
        MyShop
      </div>

      <nav className="nav">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        <NavLink to={"/profile"}>Profile</NavLink>
      </nav>

      <div className="icons">
        <div className="icon">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="icon">
          <i className="fa-solid fa-user"></i>
        </div>
        <div className="icon cart">
          <i className="fa-solid fa-cart-shopping"></i>
          <span className="badge">3</span>
        </div>
      </div>
    </header>
  )
}

export default Header
