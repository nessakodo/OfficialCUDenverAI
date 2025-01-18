import React, { useEffect, useRef } from "react";

// Image imports
import img from './images/group.jpg';
import icon from './images/club-rxCX8m8Y.png';

// CSS imports
import './AboutUs.css';
import "slick-carousel/slick/slick.css";

// Carousel imports
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";


const AboutUs = () => {
    ///////////////////////////
    //States
    ///////////////////////////

    ///////////////////////////
    //Functions
    ///////////////////////////   

    /**
     * Settings for the Slider component
     */
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    ///////////////////////////
    //TSX Rendering
    ///////////////////////////
    return (
        <div className="Parent">

        {/*Hero section*/}
        <section>
            <div className="HeroTitle">
                <h1> About Us </h1>
                        
                <button>
                    <h3> Join Us </h3>
                </button>    
            </div>
        </section>

        {/* Our Mission Section */}
        <section>
        <div className="OurMission">

                <div className="MissionText">
                    <h1>Our Mission</h1>
                    <h2> The AI Student Association at CU Denver is a student-led organization dedicated to exploring the applications of artificial intelligence, data science, and machine learning. We provide a collaborative platform for students to connect, engage, and grow through hands-on projects, coding challenges, and research initiatives. Our mission is to bridge the gap between theory and practice by organizing events such as hackathons, workshops, and technical talks that equip students with the skills needed to excel in the AI industry. We focus on fostering an environment of innovation, collaboration, and professional development, ensuring that our members are prepared to tackle real-world challenges and contribute meaningfully to the field of AI. Whether you’re an experienced AI enthusiast or just getting started, the AI Student Association offers opportunities for learning, networking, and advancing your AI journey.</h2>
                </div>
            </div>

            <div className="hring">
                <hr />
            </div>
        </section>

        {/* Pillars Section */}
        <section>
        <div className="OurPillars">
                <div>
                    <h1>Our Pillars</h1>
                </div>
                <div className="Pillars">
                    <div className="PillarCard">
                        <img src={img} alt="Innovation" className="PillarImage" />
                        <h2>Innovation</h2>
                        <p>
                            Driving the exploration of artificial intelligence, machine learning, and data science through 
                            groundbreaking projects, research, and real-world applications.
                        </p>
                    </div>

                    <div className="PillarCard">
                        <img src={img} alt="Community" className="PillarImage" />
                        <h2>Community</h2>
                        <p>
                            Building a collaborative and supportive network of students, faculty, and industry professionals 
                            united by a shared passion for AI and technology.
                        </p>
                    </div>

                    <div className="PillarCard">
                        <img src={img} alt="Diversity" className="PillarImage" />
                        <h2>Diversity</h2>
                        <p>
                            Fostering inclusivity by embracing diverse perspectives, backgrounds, and ideas to enrich 
                            learning and innovation.
                        </p>
                    </div>
                </div>
            </div>

            <div className="hring">
                <hr />
            </div>
        </section>
        

        {/* Officers Section */}
        <section>
            <div className="OurOfficers">
                    <h1>Our Officers</h1>
                    <div className="Carousel">
                    <Slider {...settings}>
                            <div>
                            <img
                                className = "center"
                                src= {img}
                                alt="AI Club Icon"        
                            />
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {img}
                                alt="AI Club Icon"          
                                />
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {img}
                                alt="AI Club Icon"          
                                />
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {img}
                                alt="AI Club Icon"          
                                />
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {img}
                                alt="AI Club Icon"          
                                />
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {img}
                                alt="AI Club Icon"          
                                />  
                            </div>
                        </Slider>
                    </div>
            </div>
        </section>
        </div>

       

    );
};

export default AboutUs;
