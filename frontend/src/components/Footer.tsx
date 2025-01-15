import React from 'react';
import icon from './images/club-rxCX8m8Y.png';
import './Footer.css'; 

function Footer() {
  return (
    <footer className="footer" style={{ backgroundColor: '#ffffff', padding: '40px 20px' }}>
      
      <div className="hring">
        <hr />
      </div>
      <div className="container">
        
        {/* Right Column */}
        <div className="footer-col">
          <ul className="contact-list">
            <li>
            <a href="https://www.ucdenver.edu/" className="social-link">
              <i className="fas fa-home"></i> 
            </a>
            </li>
            <li>
            <a className="social-link" href="mailto:aisa@ucdenver.edu?subject=Your%20Subject%20Here&body=Your%20message%20here.">
              <i className="fas fa-envelope"></i>
            </a>
            </li>
            <li>
            <a href="" className="social-link">
              <i className="fas fa-phone" ></i> 
            </a>
            </li>

          </ul>
          
        </div>


        <div className="footer-col">
          <img
            src={icon}
            alt="AI Club Icon"
            style={{ width: '80px', height: '80px', marginBottom: '15px' }}
          />
        </div>

        <div className="footer-col">
          <div className="social-links">
            <a href="https://youtube.com" className="social-link">
              <i className="fab fa-youtube" style={{color: "red"}}></i>
            </a>
            <a href="https://www.linkedin.com/company/cudenver-ai" className="social-link">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/cudenver-ai" className="social-link">
              <i className="fab fa-github" style={{color: "black"}}></i>
            </a>
          </div>
        </div>

      </div>

      <div className="hring">
        <hr />
      </div>

      <div className="RightsReserved">
        Proudly affiliated with the University of Colorado Denver.
  © 2024 AI Student Association at CU Denver. All rights reserved.
      </div>
  
  </footer>
  );
}

export default Footer;
