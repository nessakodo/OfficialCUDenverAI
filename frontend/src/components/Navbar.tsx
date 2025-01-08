import React from 'react';
import { Link } from 'react-router-dom';
import './nav.css'; // Import your CSS file
import { useSelector, useDispatch } from 'react-redux'; // Import useSelector and useDispatch
import { logoutUser } from '../actions/authActions'; // Import logoutUser action creator
import { CgProfile } from "react-icons/cg";
import icon from './images/club-rxCX8m8Y.png';

const Nav = () => {
    ///////////////////////////
    //States
    ///////////////////////////

    ///////////////////////////
    //Functions
    ///////////////////////////


    ///////////////////////////
    //HTML Rendering
    ///////////////////////////
    return (
      <nav>

        <img
            src= {icon} // Relative path from public folder
            alt="AI Club Icon"
            style={{ width: '50px', height: '50px' }} // Customize size
        />
        <div className='Nav-Links'>
          <button><Link to="/">Home</Link></button>
          <button><Link to="/about">Our Work</Link></button>
          <button><Link to="/blog">Resources</Link></button>
          <button><Link to="/sign-up">Get Involved</Link></button>
        </div>
          
        <button className='Join-Us'><Link to="/sign-up">Join Us</Link></button>

        
      </nav>
    );
};

export default Nav;
