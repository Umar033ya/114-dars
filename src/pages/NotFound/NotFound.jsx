import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';
import Header from '../../companents/Header/Header.jsx'
import Fooetr from '../../companents/Footer/Footer.jsx'

function NotFound() {
  return (
    <div className="notfound">
      <Header/>
      <div className="notfound-card">
        <img 
          src="https://images.unsplash.com/photo-1605902711622-cfb43c4433f4" 
          alt="404 Not Found"
        />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The page you are looking for does not exist.</p>
        <Link to="/" className="home-btn">Go to Home</Link>
      </div>
      <Fooetr/>
    </div>
  );
}

export default NotFound;
