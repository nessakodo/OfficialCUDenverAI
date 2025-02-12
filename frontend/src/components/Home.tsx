/* Functionality imports */
import React, { useState, useEffect } from 'react';
import './Home.css'; 
import transition from "../motion/Transition";
import FadeInComponent from '../motion/Fading';
import { useLocation, useNavigate } from 'react-router-dom';

/* Image imports */
import img from './images/group.jpg';
import neuralnetwork from './images/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg';
import robotics from './images/sick-sponsored-featured-image-july2023-article1.jpg';
import icon from './images/club-rxCX8m8Y.png';

/* UI imports */
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';

import { motion } from "framer-motion";

function Home() {
    ///////////////////////////
    // States
    ///////////////////////////

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [signupData, setSignupData] = useState({
        member_name: "",
        email: "",
        attendance_time: "",
        questions: ""
    });

    const navigate = useNavigate();
    const location = useLocation();
    
    ///////////////////////////
    // Functions
    ///////////////////////////

    useEffect(() => {
        if (location.state?.scrollTo) {
          const element = document.getElementById(location.state.scrollTo);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }
    }, [location]);

    const handleChange = (e) => {
        setSignupData({
            ...signupData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://129.153.84.107:8080/get-new_registration', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(signupData),
        })
        .then((response) => {
          navigate('/about');
            
        })
        .then((data) => {
            navigate('/home'); // Redirect to home page on successful signup
        })
        .catch((error) => {
            setError(error.message);
        });
    };

    ///////////////////////////
    // TSX Rendering
    ///////////////////////////
    return (
        <div className="HomePage">
            <FadeInComponent>

                {/* Hero section */}
                <section>
                    <div className="HeroTitle">
                        <div className="SignupSection">
                            <img src={icon} alt="AI Student Association Logo" className="signup-logo" />
                            <h2>Join our community to get notified about events and hackathons, and gain exclusive access to participate!</h2>

                            <form className="signup-form" onSubmit={handleSubmit}>
                                <input 
                                    type="text" 
                                    name="member_name" 
                                    placeholder="Enter Your Name" 
                                    value={signupData.member_name} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <input 
                                    type="email" 
                                    name="email" 
                                    placeholder="Enter Your Email" 
                                    value={signupData.email} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    name="attendance_time" 
                                    placeholder="When would you be able to attend (~1 hour, monthly) meetings? (e.g. 'Monday, midday')" 
                                    value={signupData.attendance_time} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <input 
                                    type="text" 
                                    name="questions" 
                                    placeholder="Any questions or comments for us?" 
                                    value={signupData.questions} 
                                    onChange={handleChange} 
                                    required 
                                />
                                <button type="submit">Apply</button>
                            </form>

                        </div>
                    </div>
                </section>

            </FadeInComponent>
        </div>
    );
}

export default Home;
