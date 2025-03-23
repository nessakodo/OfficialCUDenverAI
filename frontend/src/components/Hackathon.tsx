/**
 * This will be the page for the hackathon with route /events/hackathon2025
 */

/*Functionality imports*/

import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { setBlogs, setError } from "../actions/BlogsActions";
import { Link, Element } from "react-scroll";
import './Hackathon.css'
import styles from "./HackathonPage.module.css";

/* UI Imports */
import { motion } from "framer-motion";

/* Image Imports */

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

    ///////////////////////////
    // Functions
    ///////////////////////////


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
              <Link to="schedule" smooth={true} duration={500}>
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
            <button className="register-btn">Register Now</button>
            
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
        </Element>

    <div className={styles.container}>
      {/* Timeline Section */}
      <section className={styles.timelineSection}>
        <h2>All <span className={styles.highlight}>activities</span> of this year's hackathon</h2>
        <div className={styles.timelineGrid}>
          <div className={styles.eventBox}>Challenge Owner Session<br /><span>Dec 1 - 2</span></div>
          <div className={styles.eventBox}>Mentor Session<br /><span>Dec 1 - 2</span></div>
          <div className={styles.eventBox}>Hacking Time<br /><span>Dec 1 | 13:00 - 18:00</span></div>
          <div className={styles.eventBox}>Hacking Time<br /><span>Dec 2 | 11:00 - 18:00</span></div>
          <div className={styles.eventBox}>Pitch Deadline<br /><span>Dec 3 | 12:00 CET</span></div>
          <div className={styles.eventBox}>Pitch Event<br /><span>Dec 3 | 12:00 - 16:00</span></div>
          <div className={styles.eventBox}>Celebration<br /><span>Dec 3 | 16:00 - 18:00</span></div>
        </div>

        <div className={styles.prizeSection}>
          <h2>Always something to <span className={styles.highlight}>win!</span></h2>
          <div className={styles.prizeBox}>
            <img src="/prize.png" alt="Prize Trophy" className={styles.prizeImage} />
            <span className={styles.prizeAmount}>€2,500</span>
          </div>
          <p className={styles.prizeNote}>Winners will receive a cash prize and further support from our partners.</p>
        </div>
      </section>

      {/* Sitemap Section */}
      <section className={styles.sitemapSection}>
        <h2>Sitemap</h2>
        <div className={styles.sitemapContainer}>
          <div className={styles.sitemapItem}><strong>HOME</strong></div>
          <div className={styles.sitemapLinks}>
            <div className={styles.sitemapItem}>About</div>
            <div className={styles.sitemapItem}>Requirements</div>
            <div className={styles.sitemapItem}>How to Participate?</div>
            <div className={styles.sitemapItem}>Prize Fund</div>
            <div className={styles.sitemapItem}>Register</div>
          </div>
        </div>
      </section>
    </div>
  
        {/* Event Details Section */}
        <Element name="details">
            <section className="details">
                <h2>Overview</h2>
                <p>
                <strong>Auraria Hack 2025</strong> is a campus-wide hackathon where students tackle real-world problems using <strong>AI & machine learning</strong>.  
                Whether you're a **beginner** or an **experienced coder**, this event is your chance to **build, compete, and showcase your skills**!
                </p>

                <h3>What to Expect</h3>
                <ul>
                <li>💡 **Day 1:** Ideation, research, and concept validation.</li>
                <li>🛠️ **Day 2:** Prototype development, user testing, and final presentations.</li>
                <li>🎤 **Final Pitch:** Teams will present their projects to a panel of judges.</li>
                </ul>

                <h3>How It Works</h3>
                <p>
                - **Team Formation:** Register solo or in a team (max **4 members**).  
                - **Workshops & Mentorship:** Get guidance from industry experts.  
                - **Judging Criteria:** Your project will be evaluated based on:
                </p>

                <ul>
                <li>🔍 **Problem Definition** – How well is the problem identified?</li>
                <li>🌍 **Impact & Feasibility** – Can this work in the real world?</li>
                <li>💡 **Innovation** – Is it a fresh, creative approach?</li>
                <li>⚙️ **Technical Depth** – Functional prototypes score higher!</li>
                <li>📝 **Presentation Clarity** – Can you explain your solution effectively?</li>
                </ul>

                <p>
                Whether you're building a **functional prototype** or pitching a **well-researched concept**, your work will be judged fairly based on creativity, practicality, and technical proficiency.
                </p>

                <p>
                🏆 **Ready to make an impact?** Join us and turn ideas into reality!  
                </p>
            </section>
        </Element>

        {/* Rules Section */}
        <Element name="rules">
          <section className="rules">
            <h2>Event Rules</h2>
            <p></p>
          </section>
        </Element>
  
        {/* Schedule Section */}
        <Element name="schedule">
            <section className="schedule">
                <h2>Schedule</h2>

                {/* Day 1: Kickoff & Hacking Starts */}
                <div className="schedule-day">
                <h3>Day 1: October 5, 2025</h3>
                <ul>
                    <li>🕘 9:00 AM - Opening Ceremony</li>
                    <li>🛠️ 10:00 AM - Team Formation & Hacking Begins</li>
                    <li>🍕 12:30 PM - Lunch Break</li>
                    <li>🎤 2:00 PM - Guest Speaker</li>
                    <li>💡 5:00 PM - Mentorship & Q&A</li>
                    <li>🌙 9:00 PM - End of Day 1</li>
                </ul>
                </div>

                {/* Day 2: Hacking & Workshops */}
                <div className="schedule-day">
                <h3>Day 2: October 6, 2025</h3>
                <ul>
                    <li>🛠️ 9:00 AM - Hacking Resumes</li>
                    <li>🎓 11:00 AM - Technical Workshop</li>
                    <li>🍕 1:00 PM - Lunch Break</li>
                    <li>🔍 3:00 PM - Code Reviews & Debugging Help</li>
                    <li>📢 6:00 PM - Midpoint Check-in</li>
                    <li>🎮 9:00 PM - Fun Break: Mini Coding Challenge</li>
                    <li>🌙 12:00 AM - Late Night Hacking</li>
                </ul>
                </div>

                {/* Day 3: Final Submissions & Awards */}
                <div className="schedule-day">
                <h3>Day 3: October 7, 2025</h3>
                <ul>
                    <li>🛠️ 9:00 AM - Final Hacking Session</li>
                    <li>📝 12:00 PM - Project Submissions Due</li>
                    <li>🍕 1:00 PM - Lunch & Networking</li>
                    <li>📝 2:00 PM - Project Demos & Judging</li>
                    <li>🏆 5:00 PM - Awards Ceremony</li>
                    <li>🎉 6:00 PM - Closing Remarks & Celebration</li>
                </ul>
                </div>
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
  

  
        <footer>
          <p>Powered by AI Club | Contact us at <a href="mailto:ai-club@ucdenver.edu">ai-club@ucdenver.edu</a></p>
        </footer>
      </div>
    );
}

export default Hackathon;
