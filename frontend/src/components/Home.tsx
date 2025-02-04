/*Functionality imports*/

import React, { useState, useEffect} from 'react';
import './Home.css'; 
import transition from "../motion/Transition";
import FadeInComponent from '../motion/Fading';
import { useLocation } from 'react-router-dom';


/*Image imports*/

import img from './images/group.jpg';
import neuralnetwork from './images/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg'
import robotics from './images/sick-sponsored-featured-image-july2023-article1.jpg'
import icon from './images/club-rxCX8m8Y.png';

/*UI imports*/

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import {motion} from "framer-motion"

function Home() {
    ///////////////////////////
    //States
    ///////////////////////////

    /**
     * @typedef {boolean} loading
     * @description Indicates whether the data is currently loading
     */
    const [loading, setLoading] = useState(true);

    /**
     * @typedef {string|null} Error
     * @description Stores any error message encountered during API calls
     */
    const [error, setError] = useState(null);


    const location = useLocation();
    
    ///////////////////////////
    //Functions
    ///////////////////////////
    useEffect(() => {
        if (location.state?.scrollTo) {
          const element = document.getElementById(location.state.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
      }, [location]);

    ///////////////////////////
    //TSX Rendering
    ///////////////////////////
    return (
            <div className="HomePage" >
                <FadeInComponent>

                {/*Hero section*/}
                <section>
                <div className="HeroTitle">
                        <h1> 
                        Empowering the Next Generation of AI Innovators 
                        </h1> 
                        
                        <h2> Fostering collaboration, innovation, and hands-on opportunities in AI, Data Science, and Machine Learning at CU Denver. </h2>
                        
                        <button>
                            <h3> Join </h3>
                        </button>    
                </div>
                </section>
                </FadeInComponent>
                
                {/*Who we are section*/}
                <section>
                <FadeInComponent>
                <div className="WhoWeAre">
                    <h2> Who We Are </h2>

                    <p> The AI Student Association at CU Denver is a student-led organization dedicated to exploring the applications of artificial intelligence, data science, and machine learning. We provide a collaborative platform for students to connect, engage, and grow through hands-on projects, coding challenges, and research initiatives. Our mission is to bridge the gap between theory and practice by organizing events such as hackathons, workshops, and technical talks that equip students with the skills needed to excel in the AI industry. We focus on fostering an environment of innovation, collaboration, and professional development, ensuring that our members are prepared to tackle real-world challenges and contribute meaningfully to the field of AI. Whether you’re an experienced AI enthusiast or just getting started, the AI Student Association offers opportunities for learning, networking, and advancing your AI journey. </p>
                </div>
                </FadeInComponent>
                </section>


                {/*Featured projects section*/}
                <FadeInComponent>
                <section>
                <div className="FeaturedProject">
 
                </div>
            
                </section>
            </FadeInComponent>

                

            </div>
        );
}

export default Home;
