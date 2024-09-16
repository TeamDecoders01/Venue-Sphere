import React from 'react';
import Navbar from '../../components/Navbar/Navbar'; // Adjust the path as necessary
import './Homepage.css'; // If you have a CSS file for homepage styles
import Banner from '../../components/Banner/Banner';

const Homepage: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="homepage-content">
        <Banner></Banner>
      </main>
    </div>
  );
};

export default Homepage;
