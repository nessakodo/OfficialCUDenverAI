import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; 
import { useSelector, useDispatch } from 'react-redux'; 
import { logoutUser } from '../actions/authActions'; 
import { CgProfile } from "react-icons/cg";
import { useNavigate } from 'react-router-dom';
import icon from './images/club-rxCX8m8Y.png';


const Nav = () => {
    ///////////////////////////
    //States
    ///////////////////////////

    ///////////////////////////
    //Functions
    ///////////////////////////
    const navigate = useNavigate(); // React Router hook for navigation

    ///////////////////////////
    //HTML Rendering
    ///////////////////////////
    return (
      <div className="parent">
      <nav>

        <img
            src= {icon} // Relative path from public folder
            alt="AI Club Icon"
            style={{ width: '50px', height: '50px' }} // Customize size
        />
        <div className='Nav-Links'>
          <button onClick={() => navigate('/home')}>Home</button>
          <button onClick={() => navigate('/projects')}>Our Work</button>
          <button onClick={() => navigate('/events')}>Events</button>
          <button onClick={() => navigate('/blog')}>Resources</button>
          <button onClick={() => navigate('/about-us')}>About Us</button>
          <button onClick={() => navigate('/news')}>News</button>
          <div className='Join-Us'>
            <button onClick={() => navigate('/signup')}>Join Us</button>
          </div>
        </div>
          

        
      </nav>

      <div className="hring">
        <hr />
      </div>
      </div>
    );
};

export default Nav;
