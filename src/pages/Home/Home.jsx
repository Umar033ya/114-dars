import React from 'react'
import './Home.css'
import Header from '../../companents/Header/Header.jsx'
import Fooetr from '../../companents/Footer/Footer.jsx'

function Home() {
  return (
    <div className="home">
      <Header/>
      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-text">
          <h1>Welcome to <span>MyShop</span></h1>
          <p>
            Premium quality products with fast delivery and the best online shopping experience.
          </p>
          <button className="hero-btn">Shop Now</button>
        </div>

        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0" alt="Hero" />
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section className="services">

        <h2 className="services-title">Why Choose Us?</h2>

        <div className="cards">

          <div className="card">
            <i className="fa-solid fa-truck"></i>
            <h3>Fast Delivery</h3>
            <p>Get your products delivered quickly and safely anywhere.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-shield-halved"></i>
            <h3>Secure Payment</h3>
            <p>Your transactions are encrypted and completely secure.</p>
          </div>

          <div className="card">
            <i className="fa-solid fa-star"></i>
            <h3>Best Quality</h3>
            <p>We provide only high-quality and trusted products.</p>
          </div>

        </div>

      </section>
     <Fooetr/>
    </div>
  )
}

export default Home
