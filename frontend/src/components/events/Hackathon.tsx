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
            <p>Innovate, Build, and Compete with the Best!</p>
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
                        <p>60-80 students from Auraria Campus (CU Denver, MSU Denver, CCD).</p>
                    </div>

                    <div className="content-box">
                        <h3>Event Description</h3>
                        <p>
                            This is a hackathon competition for students on Auraria campus. The hackathon focuses on four big areas that are seeing significant impacts from AI development. Participants will collaborate in teams of four to solve a problem within these fields, which serve as hackathon tracks.
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
                <div className={styles.eventBox}>Check-in + Breakfast<br /><span>9:00 - 9:30 AM</span></div>
                <div className={styles.eventBox}>Opening Keynote + Hackathon Intro<br /><span>9:30 - 10:00 AM</span></div>
                <div className={styles.eventBox}>Brainstorming Session<br /><span>10:00 AM - 12:00 PM</span></div>
                <div className={styles.eventBox}>Lunch + Networking<br /><span>12:00 - 1:00 PM</span></div>
                <div className={styles.eventBox}>Conceptualization<br /><span>1:00 - 3:00 PM</span></div>
                <div className={styles.eventBox}>Midday Check-ins<br /><span>3:00 - 4:00 PM</span></div>
                <div className={styles.eventBox}>Pitch Practice Workshop<br /><span>4:00 - 5:00 PM</span></div>
                <div className={styles.eventBox}>Challenge Owner Session<br /><span>All Day</span></div>
                <div className={styles.eventBox}>Mentor Session<br /><span>All Day</span></div>
                <div className={styles.eventBox}>Hacking Time<br /><span>1:00 - 6:00 PM</span></div>
            </div>

            <div className={styles.dayColumn}>
                <h3>Day 2 - April 17 </h3>
                <div className={styles.eventBox}>Check-in + Breakfast<br /><span>9:00 - 9:30 AM</span></div>
                <div className={styles.eventBox}>Prototype Development<br /><span>9:30 AM - 12:00 PM</span></div>
                <div className={styles.eventBox}>Lunch + Networking<br /><span>12:00 - 1:00 PM</span></div>
                <div className={styles.eventBox}>User Testing<br /><span>1:00 - 2:00 PM</span></div>
                <div className={styles.eventBox}>Prototype Development (Iterations)<br /><span>2:00 - 4:00 PM</span></div>
                <div className={styles.eventBox}>Pitch Practice<br /><span>4:00 - 5:00 PM</span></div>
                <div className={styles.eventBox}>Hacking Time<br /><span>11:00 AM - 6:00 PM</span></div>
            </div>

            <div className={styles.dayColumn}>
                <h3>Day 3 - April 18</h3>
                <div className={styles.eventBox}>Pitch Deadline<br /><span>12:00 PM CET</span></div>
                <div className={styles.eventBox}>Final Presentations + Videotaping<br /><span>5:00 - 7:00 PM</span></div>
                <div className={styles.eventBox}>Pitch Event<br /><span>12:00 - 4:00 PM</span></div>
                <div className={styles.eventBox}>Celebration<br /><span>4:00 - 6:00 PM</span></div>
            </div>
        </div>

        <div className={styles.prizeSection}>
          <h2>Always something to <span className={styles.highlight}>win!</span></h2>
          <div className={styles.prizeBox}>
            <img src={BagPrize} alt="Prize Trophy" className={styles.prizeImage} />
            <span className={styles.prizeAmount}>€2,500</span>
          </div>
          <p className={styles.prizeNote}>Winners will receive a cash prize and further support from our partners.</p>
        </div>
      </section>

    </div>
    </Element>


        {/* Rules Section */}
        <Element name="rules">
          <section className="rules">
            <h2>Event Rules</h2>
            <p></p>
          </section>
        </Element>
  


        {/* Judging Criteria */}
        <Element name="judgingcriteria">
          <section className="judgingcriteria">
          <h2>Judging Criteria</h2>
          <PieChart
                series={[
                    {
                    arcLabel: (item) => `${item.value}%`,

                    data: [
                        { id: 0, value: 20, label: "Problem & Solution" },
                        { id: 1, value: 20, label: "Impact & Feasibility" },
                        { id: 2, value: 20, label: "Technical Depth" },
                        { id: 3, value: 15, label: "Innovation & Creativity" },
                        { id: 4, value: 10, label: "Q&A Responses" },
                        { id: 5, value: 10, label: "Presentation & Clarity" },
                        { id: 6, value: 5, label: "User-Centered Design & UX" },
                    ],
                    },
                ]}
                width={250}
                height={250}
                />
          </section>
        </Element>

        {/* Resources Section */}
        <Element name="resources">
          <section className="resources">
          <h3>Explore Our Resources</h3>
          <p>Find guides, tutorials, and AI learning materials.</p>
          <button onClick={() => {navigate('/events/hackathon2025/resources'); }} className="resources-btn">Go to Resources</button>
          </section>
        </Element>
  
        {/* FAQ Section */}
        <Element name="faq">
          <section className="faq">
            <h2>FAQ</h2>
            <p><strong>Who can participate?</strong> Anyone interested in AI & coding!</p>
            <p><strong>How much does it cost?</strong> It’s free!</p>
          </section>
        </Element>
  

  
      </div>
    );
}

export default Hackathon;
