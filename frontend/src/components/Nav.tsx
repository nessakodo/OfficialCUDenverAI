/*Functionality imports*/

import React from 'react';
import './Nav.css'; 
import { useNavigate } from 'react-router-dom';

/*Image imports*/

import icon from './images/club-rxCX8m8Y.png';


const Nav = () => {
    ///////////////////////////
    //States
    ///////////////////////////

    /**
    * @description React Router hook for navigation
    */
    const navigate = useNavigate(); 

    ///////////////////////////
    //Functions
    ///////////////////////////
    

    ///////////////////////////
    //TSX Rendering
    ///////////////////////////
    return (
      <div className="parent">
      <nav>
        {/*AI Club navigation bar logo*/}

        <img
            src= {icon} 
            alt="AI Club Icon"
            style={{ width: '50px', height: '50px' }} 
        />

        {/*AI Club navigation bar buttons*/}

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

      {/*The seperation line*/}

      <div className="hring">
        <hr />
      </div>
      </div>
    );
};

export default Nav;
