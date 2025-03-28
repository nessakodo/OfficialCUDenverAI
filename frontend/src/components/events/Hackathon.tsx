/**
 * This will be the page for the hackathon with route /events/hackathon2025
 */

/*Functionality imports*/

import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { setBlogs, setError } from "../../actions/BlogsActions";
import { useNavigate } from 'react-router-dom';
import { Link, Element } from "react-scroll";
import './Hackathon.css'
import styles from "./HackathonPage.module.css";


/* UI Imports */
import { motion } from "framer-motion";
import { PieChart } from '@mui/x-charts/PieChart';
import Countdown from 'react-countdown';

/* Image Imports */
import BagPrize from '../images/Hackathon/bag.png'


function Hackathon() {
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
        {/* Navbar with Links to Sections */}
        <nav className="navbar">
          <ul>
            <li>
              <Link to="hero" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li>
              <Link to="details" smooth={true} duration={500}>
                Event Details
              </Link>
            </li>
            <li>
              <Link to="rules" smooth={true} duration={500}>
                Rules
              </Link>
            </li>
            <li>
              <Link to="timeline" smooth={true} duration={500}>
                Timeline
              </Link>
            </li>
            <li>
              <Link to="prizes" smooth={true} duration={500}>
                Prizes
              </Link>
            </li>
            <li>
              <Link to="faq" smooth={true} duration={500}>
                FAQ
              </Link>
            </li>
            <li>
              <Link to="resources" smooth={true} duration={500}>
                Resources
              </Link>
            </li>
          </ul>
        </nav>
  
        {/* Hero Section */}
        <Element name="hero">
        <section className="hero">
            <h1>AI Club Hackathon 2025</h1>
            <h2>Innovate, Build, and Compete with the Best!</h2>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=yjczVhelGkKq4BqltBT9f0pyyXMYCX5OiVgHckMlvl5UNDJQU0pPQUpINjhDNFRNQVU2TFc0WVZGNCQlQCN0PWcu&origin=QRCode"> <button className="register-btn">Register Now</button> </a>
            
        </section>
        </Element>

      {/* Countdown Section */}
      <section className="Countdown">
        <h2>Countdown to Hackathon</h2>
        <Countdown
          date={new Date('2025-04-16T09:00:00')} // set the target date here
          renderer={renderer}
        />
      </section>

        <section className="HackathonVideo">
        {/* Video Section */}
        <motion.div
            initial="hidden"
            animate="visible"
            variants={titleVariants}
            >
            <video controls>
                <source src="hackathon.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </motion.div>
        </section>

                {/* Event Details Section */}
              <Element name="details">
            <section className="details">
            <div className="details-container">
                    <h2>Auraria Hack 2025</h2>
                    <p className="intro-text">
                        A hackathon designed to bring students together to solve real-world challenges using AI.
                    </p>

                    <div className="content-box">
                        <h3>Vision</h3>
                        <p>Foster interdisciplinary collaboration to solve real-world challenges using AI, while equipping students with hands-on technical and entrepreneurial skills.</p>
                    </div>

                    <div className="content-box">
                        <h3>Target Audience</h3>
                        <p>Any major is welcomed and no expereince is needed.</p>
                    </div>

                    <div className="content-box">
                        <h3>Event Description</h3>
                        <p>
                            This is a hackathon competition for students in CU Denver. The hackathon focuses on four big areas that are seeing significant impacts from AI development. Participants will collaborate in teams of four to solve a problem within these fields, which serve as hackathon tracks.
                        </p>
                    </div>

                    <div className="content-box">
                        <h3>The 4 Tracks for Auraria Hack 2025</h3>
                        <ul>
                            <li>Healthcare</li>
                            <li>Finance</li>
                            <li>Transportation</li>
                            <li>Climate Change / Sustainability</li>
                        </ul>
                    </div>
                </div>
            </section>
        </Element>

    <Element name="timeline">
    <div className={styles.container}>
      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <h2>All <span className={styles.highlight}>activities</span> of this year's hackathon</h2>
        <div className={styles.timelineContainer}>
            <div className={styles.dayColumn}>
                <h3>Day 1 - April 16 </h3>
                <div className={styles.eventBox}>Opening Ceremony<br /><span>5:00 PM - 7:00 PM</span></div>
            </div>

            <div className={styles.dayColumn}>
                <h3>Day 2 - April 17 </h3>
                <div className={styles.eventBox}> No scheduled event. Our team will be on standby to provide assistance to teams on a needs-based basis."<br /></div>
            </div>

            <div className={styles.dayColumn}>
                <h3>Day 3 - April 18</h3>
                <div className={styles.eventBox}>Presentation<br /><span>12 PM - 4 PM</span></div>
                <div className={styles.eventBox}>Closing Ceremony<br /><span>4 PM - 5 PM</span></div>
            </div>
        </div>


      </section>

    </div>
    </Element>

    <Element name="prizes">
    <section className="prizes-container">
      <h2 className="prizes-title">Prizes</h2>
      <ul className="prizes-list">
        <li><strong>1st Place:</strong> $100 + Engraved Award</li>
        <li><strong>2nd Place:</strong> $75 + Engraved Award</li>
        <li><strong>3rd Place:</strong> $50 + Engraved Award</li>
        <li>All other teams will receive participation certificates.</li>
      </ul>
    </section>
    </Element>


        {/* Rules Section */}
        <Element name="rules">
        <section id="rules" className="rules-container">

          <h2 className="rules-title">Hackathon Rules</h2>
          <ul className="rules-list">
            <li>All submissions must be the team's own work, and participants must be able to provide proof of work if requested.</li>
            <li>The idea does not have to be original, but teams will be judged on the quality of their execution.</li>
            <li>Teams are allowed to use libraries, frameworks, and open-source code in their projects.</li>
            <li>Reusing an idea from a previous project is permitted, but participants must disclose this and make significant modifications.</li>
          </ul>
        </section>
        </Element>

        {/* Resources Section */}
        <Element name="resources">
          <section className="resources">
          <h2 className="rules-title">Explore Our Resources</h2>
          <p>Find guides, tutorials, and AI learning materials.</p>
          <button onClick={() => {navigate('/events/hackathon2025/resources'); }} className="resources-btn">Go to Resources</button>
          </section>
        </Element>
  
        {/* FAQ Section */}
        <Element name="faq">
          <section className="faq">
            <h2>FAQ</h2>
            <button onClick={() => {navigate('/events/hackathon2025/faq'); }} className="resources-btn">Go to FAQ Section</button>
          </section>
        </Element>
  

  
      </div>
    );
}

export default Hackathon;
