import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
  <div className="about-top"> 
      <h1>About Paul Donovan</h1>
      <p>I am a front-end web developer specializing in creating modern, responsive websites for small businesses. With expertise in CSS, HTML, JavaScript, and React, I am passionate about helping local businesses in Regional Victoria establish their online presence.</p>

</div>
<div classname="about-bottom">
<h1 className='project-header'>Projects</h1>

<ul className='about-links'>
<li>
  <a href="https://nhill-thai-massage.vercel.app/" target="_blank" rel="noopener noreferrer">
   Nhill Thai Massage
  </a>
</li>


<li>
  <a href="https://github.com/paulmatdonovan/ecommerce/tree/main" target="_blank" rel="noopener noreferrer">KeyStyle Ecommerce Store</a>
</li>

<li> <a href="https://pauldonovanblog.vercel.app/" target="_blank" rel="noopener noreferrer">Blog</a>
</li>

</ul>



</div>
    </div>
  );
};

export default About;
