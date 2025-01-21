import React from 'react';
import './Home.css';
import paul from '../../Assets/20240125_074525257_iOS.png'

const Home = () => {
  return (
    <div className="home">
      <div className="home-left">
      <h1>Paul Donovan</h1>
      <h2>Web Developer</h2>
      <p>Founder of Elevate Web Solutions.
Your trusted partner for small business websites in Regional Victoria. 
I'm a part time teacher and aspiring Web Developer. 
</p>

<p>Let me help you to get your message out there. </p>

      </div>
     <div className="home-right">
    <img src={paul} alt="web developer" className="profile" />

     </div>
    </div>
  );
};

export default Home;

