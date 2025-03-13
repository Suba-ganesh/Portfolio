import React from 'react';
import './Hero.css';
import profileimg from '../assets/profile_img.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

const Hero = () => {
  return (
    <div className='hero' id='home' >
        <img src={profileimg} alt="" />
        <h1><span>I am Subaganesh</span>, MERN Stack Developer</h1>
        <p> I am MERN Stack Develpor from Tirupur India, I Completed Certification of FullstackDevelopment from Pumo technovation, Coimbatore</p>
         

        <div className="hero-action">
          <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'> Connect With me</AnchorLink></div>
          <div className="hero-resume">My Resume</div>
        </div>
    
    </div>
    
  )
}

export default Hero