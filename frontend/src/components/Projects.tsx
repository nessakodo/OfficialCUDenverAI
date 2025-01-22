/*Functionality imports*/

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
  import "./Projects.css";
import { useSelector, useDispatch } from "react-redux";
import { CgProfile } from "react-icons/cg";

/*Image imports*/

import template_vid from "./images/20241010_235245000_iOS.mp4"
import img from './images/group.jpg';

/*UI imports*/

import {motion} from "framer-motion"
import transition from "../motion/Transition";
import FadeInComponent from '../motion/Fading';
import NeuralNetworkVisualization from '../motion/NeuralNetworkVisual';



function Projects() {
  const projects = [
    {
      id: 1,
      title: "Decoy Challenge",
      image: require("./images/vicente.jpg"), // Path relative to the current file
      description:
        "Description of the Decoy Challenge project. Learn about AI robustness and security through adversarial techniques.",
    },
    {
      id: 2,
      title: "Project #2",
      image: require("./images/download.jpg"), // Path relative to the current file
      description: "Description for project #2. Explore innovative AI applications.",
    },
    {
      id: 3,
      title: "Project #3",
      image: require("./images/download.jpg"), // Path relative to the current file
      description: "Description for project #3. Dive into AI-driven solutions.",
    },
  ];

  // State to track which projects are expanded
  const [expanded, setExpanded] = useState<number | null>(null);

  const handleToggleExpand = (id: number) => {
    setExpanded(expanded === id ? null : id);
  };

  useEffect(() => {
    const video = document.querySelector(".video-background") as HTMLVideoElement;
    if (video) {
      video.playbackRate = 0.7; 
    }
  }, []);

  return (
    <div className="ProjectsPage">

      
      {/* Header Section */}
      <section>

      <FadeInComponent>
      <div className="HeroTitle-Projects">
      <video autoPlay loop muted className="video-background">
        <source src={template_vid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <h1>
        What We’re Working On
        </h1>
        <h2>
        Explore the projects, challenges, and initiatives that drive innovation and collaboration in AI, Data Science, and Machine Learning.        </h2>
        <button>
          <h3>Join Us</h3>
        </button>
      </div>
      </FadeInComponent>

      <FadeInComponent>
      <div className="Impacts"></div>
      </FadeInComponent>
      </section>


      <section>
      <FadeInComponent>
      <div className="FeaturedProject" style = {{backgroundColor: "white"}}> 
          <div className="FP-Text">
          <h4>Featured Project</h4>
          <h5>D.E.C.O.Y. Challenge</h5>
          <p>
            This challenge invites all Auraria Campus students to dive into the
            intriguing world of adversarial machine learning by crafting
            adversarial examples that can deceive a robust machine learning
            classifier trained on the CIFAR-10 dataset. Your mission is to create
            subtle but effective modifications to a set of test images, fooling
            the classifier into making incorrect predictions. This challenge is a
            perfect opportunity for students to explore model vulnerabilities,
            gain hands-on experience with adversarial techniques, and contribute
            to ongoing research in AI robustness and security.
          </p>
          <button
        className="LearnMoreButton"
        onClick={() => window.open("https://cudenver-ai.github.io/", "_blank")}
      >
        Learn More
      </button>

        </div>

        <div className="FP-Image">
          <img src={img} alt="AI Club"></img>
        </div>
    </div>
    </FadeInComponent>

    {/* Projects Grid */}
    <FadeInComponent>
    <div className="ProjectGrid">
      <div className="ProjectGridCards">
      {projects.map((project) => (
        <motion.div
          className="ProjectCard"
          key={project.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
        >
          <motion.img
            src={project.image}
            alt={project.title}
            className="ProjectImage"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.4 }}
          />
          <div className="ProjectDetails">
            <h3>{project.title}</h3>
            <motion.p
              initial={{ height: 50, overflow: "hidden" }}
              animate={{
                height: expanded === project.id ? "auto" : 50,
              }}
              transition={{ duration: 0.3 }}
            >
              {expanded === project.id
                ? project.description
                : `${project.description.substring(0, 50)}...`}
            </motion.p>
            <motion.button
              className="ShowMoreButton"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => handleToggleExpand(project.id)}
            >
              {expanded === project.id ? "Show Less" : "Show More"}
            </motion.button>
          </div>
        </motion.div>
      ))}
      </div>
    </div>
    </FadeInComponent>
    </section>

    </div>
  );
}

export default Projects;
