import React from "react";
import "./About.css";
function About() {
  return (
    
<>
    <div className="about">

      
      <section className="about-section">
        <div className="about-text">
          <h1>About <span>MyShop</span></h1>
          <p>
            MyShop is a modern online marketplace offering premium quality
            products with fast delivery and trusted customer service.  
            Our mission is to provide the best shopping experience with secure payment
            and carefully selected items.
          </p>
          <p>
            We focus on quality, safety, and customer satisfaction — making sure you always
            receive the best products at the best value.
          </p>
        </div>

        <div className="about-img">
          <img
            src="https://images.unsplash.com/photo-1523275335684-37898b6baf30"
            alt="About"
          />
        </div>
      </section>

     
      <section className="values-section">
        <h2 className="values-title">Our Core Values</h2>

        <div className="value-cards">

          <div className="value-card">
            <i className="fa-solid fa-heart"></i>
            <h3>Customer First</h3>
            <p>We always prioritize customer satisfaction and support.</p>
          </div>

          <div className="value-card">
            <i className="fa-solid fa-gem"></i>
            <h3>Premium Quality</h3>
            <p>Every product is hand-selected to ensure top quality.</p>
          </div>

          <div className="value-card">
            <i className="fa-solid fa-headset"></i>
            <h3>24/7 Support</h3>
            <p>Our support team is always ready to assist you.</p>
          </div>

        </div>
      </section>

    </div>
    </>
  );
}

export default About;
