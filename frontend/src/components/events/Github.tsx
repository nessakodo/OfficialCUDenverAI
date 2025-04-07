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
  
    const agendaItems = [
        {
          time: "5:00 - 5:10 PM",
          title: "Registration & Welcome",
          description:
            "Participants check in, receive name tags, and enjoy light refreshments.",
        },
        {
          time: "5:10 - 5:20 PM",
          title: "Opening Remarks",
          description:
            "A brief introduction outlining the event’s goals and the value of GitHub Foundations Certifications.",
        },
        {
          time: "5:20 - 5:40 PM",
          title: "Presentation & Overview",
          description:
            "An informative session covering the fundamentals of GitHub Foundations Certifications, including how-to, benefits, and career impact.",
        },
        {
          time: "5:40 - 5:55 PM",
          title: "Live Demonstration",
          description:
            "A step-by-step walkthrough of the certification process and a showcase of key GitHub tools and features.",
        },
        {
          time: "5:55 - 6:10 PM",
          title: "Q&A Session",
          description:
            "Participants ask questions and clarify details about the certification process.",
        },
        {
          time: "6:10 - 6:20 PM",
          title: "Break + Networking",
          description:
            "A short break to refresh and allow attendees to network.",
        },
        {
          time: "6:20 - 6:50 PM",
          title: "Hands-on Exercises",
          description:
            "Breakout sessions where participants explore GitHub functionalities and work on sample tasks related to the certifications.",
        },
        {
          time: "6:50 - 7:00 PM",
          title: "Wrap Up + Next Steps",
          description:
            "Closing remarks, feedback collection, and guidance on accessing additional resources or starting the certification journey.",
        },
      ];


    
    const prerequisites = [
        "A GitHub account (Sign up at github.com if you don’t have one).",
        "Basic knowledge of Git and repositories.",
        "A laptop with Git installed (or access to GitHub Codespaces).",
        "The GitHub Student Developer Pack activated (optional but recommended).",
    ];

    const goals = [
        "Setting up SSH key. ",
        "Understand the importance of GitHub.",
        "Gain hands-on experience with key GitHub tools.",
        "Learn how to register and prepare for the certification exam.",
        "Network with other participants.",
    ];


    ///////////////////////////
    // TSX Rendering
    ///////////////////////////

    return (
        <div className="hackathon-container">
      {/* Countdown Section */}
      <section className="Countdown">
        <h2>Countdown to Github Event</h2>
        <Countdown
          date={new Date('2025-03-31T17:00:00')} // set the target date here
          renderer={renderer}
        />
      </section>

  
        {/* Hero Section */}
        <Element name="hero">
        <section className="GithubEventHero">
            <h1>Github Certification Workshop</h1>
            <h2>Learn the fundamentals of Github and earn your Github Foundations Certification! </h2>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=yjczVhelGkKq4BqltBT9f0pyyXMYCX5OiVgHckMlvl5UQkpUSjlEQTVEU0xDUUtOUVVETVdZOUZFMiQlQCN0PWcu&origin=QRCode"> <button className="register-btn">Register Now</button> </a>
            
        </section>
        </Element>

      <section className="workshop-container">

      {/* Schedule Section */}

      <section className="agenda-container">
      <h2 className="agenda-title">GitHub Certificate Workshop Agenda</h2>
      <div className="agenda-list">
        {agendaItems.map((item, index) => (
          <div key={index} className="agenda-item">
            <h3 className="agenda-time">{item.time}</h3>
            <h4 className="agenda-topic">{item.title}</h4>
            <p className="agenda-description">{item.description}</p>
          </div>
        ))}
      </div>
    </section>

    {/* Prerequisites Section */}
    <div className="prerequisites">
        <h3>Prerequisites</h3>
        <ul>
          {prerequisites.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
    </div>

          {/* Goals Section */}
          <div className="goals">
        <h3>Goals for the Day</h3>
        <ul>
          {goals.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      </section>

      <section className="resources-container">
      <h2 className="resources-title">📚 Learning Resources</h2>
      <p className="resources-description">
        Continue your GitHub learning with these resources. Whether you're just starting or want to level up, these guides will help you master GitHub!
      </p>
      <ul className="resources-list">
      <li>
          <a href="https://github.com/javedali99/git-tutorial?tab=readme-ov-file" target="_blank" rel="noopener noreferrer">
            🚀 Github Slides
          </a>
        </li>
        <li>
          <a href="https://docs.github.com/en/get-started" target="_blank" rel="noopener noreferrer">
            🚀 GitHub Docs - Get Started
          </a>
        </li>
        <li>
          <a href="https://app.datacamp.com/learn/skill-tracks/github-foundations" target="_blank" rel="noopener noreferrer">
            🏆 Github Foundations Skill Track
          </a>
        </li>
        <li>
          <a href="https://www.youtube.com/c/GitHub" target="_blank" rel="noopener noreferrer">
            🎥 GitHub YouTube Channel
          </a>
        </li>
        <li>
          <a href="https://education.github.com/" target="_blank" rel="noopener noreferrer">
            🎓 GitHub Education Pack (Free for Students!)
          </a>
        </li>
      </ul>
    </section>

      <section className="exercise-container">
      <h2 className="exercise-title">Hands-on Exercise: Introduction to GitHub</h2>
      <p className="exercise-description">
        This interactive exercise will help you learn the basics of GitHub, including repositories, branches, commits, and pull requests. Complete the official **GitHub Skills: Introduction to GitHub** module to gain practical experience.
      </p>

      <div className="exercise-steps">
        <h3>How to Complete the Exercise:</h3>
        <ol>
          <li>
            <strong>Go to the GitHub Skills course:</strong>  
            <a href="https://github.com/skills/introduction-to-github" target="_blank" rel="noopener noreferrer">
              GitHub Skills: Introduction to GitHub
            </a>
          </li>
          <li>Click **"Start Course"** to create your own repository.</li>
          <li>Follow the instructions to make commits and open a pull request.</li>
          <li>Merge the pull request once you complete the steps.</li>
          <li>Celebrate! 🎉 You’ve completed your first GitHub workflow.</li>
        </ol>
      </div>

      <div className="exercise-benefits">
        <h3>What You'll Learn:</h3>
        <ul>
          <li>Creating and managing repositories</li>
          <li>Making commits and tracking changes</li>
          <li>Branching and merging pull requests</li>
          <li>Understanding GitHub collaboration workflows</li>
        </ul>
      </div>

      <p className="exercise-note">
        📝 **Note:** This hands-on exercise is self-paced. If you have any questions, feel free to ask during the workshop!
      </p>
    </section>

    {/* Github Profile Section */}

      <section className="GithubVideo">
      <h2> How to setup profile on github</h2>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9A8sQZDRn5o?si=r60xXFIZgy8WMWqN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </section>


    {/* Github Certification Exam Tutorial Section */}
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
