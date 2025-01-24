import React from 'react';
import './Contact.css';
import silo from '../../Assets/silo.jpg'

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-details">

      <h1>Contact Us</h1>
      <p>Email: paul.matt.donovan@gmail.com</p>
      <p>Phone: 0431 212 079</p>
      <p>Address: Nhill, Victoria</p>

      </div>
      <div className="contact-photo">
        <img src={silo} alt="silo at Rainbow" />

      </div>
      
    </div>
  );
};

export default Contact;

