import React from 'react';
import './Banner.css'; // Import the external CSS file

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <h1 className="banner-heading">Welcome to VenueSphere</h1>
        <p className="banner-subheading">Discover your next great venue today!</p>
        <a href="/venues" className="banner-button">Book Venues</a>
      </div>
    </div>
  );
};

export default Banner;
