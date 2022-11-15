// rafce > tab click
import React from 'react';
import './footer.css';
import logo from '../../assets/img/logo.png';

const Footer = () => {
  return (
    <div className="gp3__footer section__padding">
      <div className="gpt3__footer-heading">
        <h1 className="gradient__text">
          Do you want to slep in to the future before others
        </h1>
      </div>

      <div className="gpt3__footer-btn">
        <p>Request Early Access</p>
      </div>

      <div className="gpt3__footer-links">
        <div className="gpt__footer-links-logo">
          <img src={logo} alt="Logo" />
          <p>Crechterwoord K12 182 DK, All Rights Reserved</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="gpt3__footer-links-div">
          <h4>Get in touch</h4>
          <p>Crechterwoord K12 182 DK Amsterdam</p>
          <p>020-2545455</p>
          <p>info@gmail.com</p>
        </div>
      </div>
      <div className="gpt3__footer-copyright">
        <p>2022 TECH. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer
