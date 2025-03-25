/**
 * This will be the page for the hackathon with route /events/hackathon2025
 */

/*Functionality imports*/

import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { setBlogs, setError } from "../../actions/BlogsActions";
import { useNavigate } from 'react-router-dom';
import { Link, Element } from "react-scroll";
import './Github.css'


/* UI Imports */
import { motion } from "framer-motion";
import { PieChart } from '@mui/x-charts/PieChart';
import Countdown from 'react-countdown';

/* Image Imports */
import GithubTuto from '../videos/GithubFoundationTuto.mp4'
import GithubEventImg from '../images/GithubEventImages.mp4'



function GithubEvent() {
    ///////////////////////////
    // States
    ///////////////////////////

    /**
    * @description React hook for dispatching actions to update states
    */
    const dispatch = useDispatch();

      
    /**
     * Options for the title transition
     */
    const titleVariants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 1, ease: 'easeOut' } },
      };

    const navigate = useNavigate();
      

    ///////////////////////////
    // Functions
    ///////////////////////////
    const renderer = ({ days, hours, minutes, seconds, completed }) => {
      if (completed) {
        return <span>Time's up!</span>;
      } else {
        return (
          <div>
            {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
          </div>
        );
      }
    };
  


    ///////////////////////////
    // TSX Rendering
    ///////////////////////////

    return (
        <div className="hackathon-container">
  
        {/* Hero Section */}
        <Element name="hero">
        <section className="GithubEventHero">
            <h1>Github Certification Workshop</h1>
            <h2>Learn the fundamentals of Github and earn your Github Foundations Certification! </h2>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=yjczVhelGkKq4BqltBT9f0pyyXMYCX5OiVgHckMlvl5UQkpUSjlEQTVEU0xDUUtOUVVETVdZOUZFMiQlQCN0PWcu&origin=QRCode"> <button className="register-btn">Register Now</button> </a>
            
        </section>
        </Element>

      {/* Countdown Section */}
      <section className="Countdown">
        <h2>Countdown to Github Event</h2>
        <Countdown
          date={new Date('2025-03-31T17:00:00')} // set the target date here
          renderer={renderer}
        />
      </section>

    {/* Video Section */}
    <section className="GithubVideo">
        <h2> How to book Github Certification Exam for free with student developer pack!</h2>
        <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={titleVariants}
                    >
                    <video controls>
                        <source src={GithubTuto} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
        </motion.div>
    </section>

  
      </div>
    );
}

export default GithubEvent;
