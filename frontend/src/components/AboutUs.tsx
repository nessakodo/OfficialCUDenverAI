import React, { useEffect, useRef } from "react";
import transition from "../motion/Transition";
import FadeInComponent from '../motion/Fading';
import { useNavigate } from 'react-router-dom';


// Image imports
import img from './images/group.jpg';
import icon from './images/club-rxCX8m8Y.png';
import communityimg from './images/community.jpg'
import innovationimg from './images/innovation.jpeg'
import diversityimg from'./images/diversity.jpeg'

import brand_off from './images/Officers/brand_off.png'
import information_off from './images/Officers/information_off.png'
import outreach_off from './images/Officers/outreach_off.png'
import pres from './images/Officers/pres.png'
import tech_off from './images/Officers/tech_off.png'
import vice_pres from './images/Officers/vice_pres.png'

// CSS imports
import './AboutUs.css';
import "slick-carousel/slick/slick.css";

// UI imports
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import {motion} from "framer-motion"


const AboutUs = () => {
    ///////////////////////////
    //States
    ///////////////////////////

    const navigate = useNavigate();
    
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

        <FadeInComponent>
        {/*Hero section*/}
        <section>
            <div className="HeroTitle">
                <h1>
                    About Us 
                </h1> 
                                        
                        
                <button onClick={() => {navigate('/home', { state: { scrollTo: 'FeaturedProject' } }); }}>
                    <h3> Join </h3>
                </button>    
            </div>
        </section>
        </FadeInComponent>
        
        <FadeInComponent>
        {/* Our Mission Section */}
        <section>
        <div className="OurMission">

                <div className="MissionText">
                    <h1>Our Mission</h1>
                    <p> The AI Student Association at CU Denver is a student-led organization dedicated to exploring the applications of artificial intelligence, data science, and machine learning. We provide a collaborative platform for students to connect, engage, and grow through hands-on projects, coding challenges, and research initiatives. Our mission is to bridge the gap between theory and practice by organizing events such as hackathons, workshops, and technical talks that equip students with the skills needed to excel in the AI industry. We focus on fostering an environment of innovation, collaboration, and professional development, ensuring that our members are prepared to tackle real-world challenges and contribute meaningfully to the field of AI. Whether you’re an experienced AI enthusiast or just getting started, the AI Student Association offers opportunities for learning, networking, and advancing your AI journey.</p>
                </div>
            </div>

            <div className="hring">
                <hr />
            </div>
        </section>
        </FadeInComponent>
        
        <FadeInComponent>
        {/* Pillars Section */}
        <section>
        <div className="OurPillars">
                <div>
                    <h1>Our Pillars</h1>
                </div>
                <div className="Pillars">
                    <div className="PillarCard">
                        <img src={innovationimg} alt="Innovation" className="PillarImage" />
                        <h3>Innovation</h3>
                        <p>
                            Driving the exploration of artificial intelligence, machine learning, and data science through 
                            groundbreaking projects, research, and real-world applications.
                        </p>
                    </div>

                    <div className="PillarCard">
                        <img src={communityimg} alt="Community" className="PillarImage" />
                        <h3>Community</h3>
                        <p>
                            Building a collaborative and supportive network of students, faculty, and industry professionals 
                            united by a shared passion for AI and technology.
                        </p>
                    </div>

                    <div className="PillarCard">
                        <img src={diversityimg} alt="Diversity" className="PillarImage" />
                        <h3>Diversity</h3>
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
        </FadeInComponent>

        <FadeInComponent>
        {/* Officers Section */}
        <section>
            <div className="OurOfficers">
                    <h1>Our Officers</h1>
                    <div className="Carousel">
                    <Slider {...settings}>
                            <div>
                                <img
                                    className = "center"
                                    src= {pres}
                                    alt="AI Club Icon"        
                                />
                                <h2>President</h2>
                                <p>
                                Vicente is a Ph.D. student in Computer Science at the University of Colorado Denver with a deep passion for AI and healthcare. His research focuses on using machine learning and deep learning to tackle complex biomedical data challenges. When he’s not diving into data, you can find him skiing, snowboarding, and camping in the Colorado outdoors. <br /> <br />

                                As President, Vicente is committed to making AISA the ultimate hub for AI enthusiasts to collaborate on impactful projects and grow their skills the way AISA is helping Vicente grow as a developer and researcher. He wants to create a vibrant community where anyone -from curious beginners to future professionals - are encouraged to explore, innovate, and thrive in the world of AI. You can connect with Vicente on LinkedIn. <br /> <br />

                                We are gearing up for new and exciting projects in the future. Join us in building this vision and shaping AISA together! 🚀
                                </p>
                            </div>
                           
                            <div>
                                <img
                                className = "center"
                                src= {vice_pres}
                                alt="AI Club Icon"          
                                />
                                <h2>Vice President</h2>
                                <p>
                                Next up, say hello to Mohamed Abdel-Hafiz, AISA’s Vice President and a fourth-year Ph.D. student in Computer Science! Mohamed’s research focuses on graph segmentation and mining, but he’s also passionate about exploring real-world AI applications. <br /><br /> Outside the lab, Mohamed juggles life as a part-time Pharmacy Tech, a go-kart afficionado, and an avid hiker. Fun fact: he’s also the proud bird dad to Ziko, a cuddly little guy who loves head scratches!<br /> <br />

                                As VP, Mohamed supports fellow officers (especially the President) and ensures AISA runs smoothly with a view to giving students real-world experience solving industry challenges beyond the classroom. With leadership skills and practical experience honed at AISA, he’s paving his path in machine learning and computer vision. Mohamed is helping build AISA into an inclusive hub for students to tackle competitions, impactful projects, and collaborate with local businesses and faculty. Let’s join Mohamed in making that vision a reality! 
                                </p>
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {outreach_off}
                                alt="AI Club Icon"          
                                />  
                                <h2>Outreach Coordinator</h2>
                                <p>
                                Say hello to Sumaiya Shrabony, AISA’s Outreach Coordinator! As a current Data Analyst with CU Denver CEDC and an MS student in Information Systems, Sumaiya brings a unique blend of analytical expertise and creative energy to the team. Outside her professional and academic pursuits, she enjoys immersing herself in the worlds of anime and manga—her latest favorite is the action-packed Haikyu!!<br /> <br />

                                In her role as Outreach Coordinator, Sumaiya focuses on building meaningful partnerships and planning strategic events that foster collaboration and inclusion. Her mission is to create an environment where students from all backgrounds feel welcome, driving AISA toward achieving a fully diverse board. <br /> <br />

                                With ambitions of becoming a Machine Learning Engineer, Sumaiya values the hands-on projects and workshops AISA offers, which are helping her gain essential skills and experience. Looking ahead, she envisions AISA as a nationally recognized club, leading the charge for AI education and advocacy among diverse student communities. Join Sumaiya as she fulfills this goal! 🌟
                                </p>
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {tech_off}
                                alt="AI Club Icon"          
                                />
                                <h2>Technology Officer</h2>
                                <p>
                                Meet Elyas Larfi, AISA’s Technology Officer! A junior studying Computer Science at CU Denver, Elyas has a passion for AI and robotics as well as mixed martial arts, basketball, soccer, and first-person shooter gaming. His diverse interests fuel his innovative mindset and curiosity.<br /> <br />

                                In his role as Technology Officer, Elyas ensures AISA’s technical infrastructure runs seamlessly by managing GitHub repositories and overseeing digital tools. He also leads workshops, supports technical projects, and mentors interns interested in honing their technical skills. With Research Assistant experiences training AI models for neural activity studies and presenting data to defense companies, Elyas brings a wealth of expertise to the role.<br /> <br />

                                Elyas is driven by the belief that learning AI shouldn’t be intimidating. He wants to empower students to build confidence in understanding AI and its transformative potential. By contributing to AISA, Elyas is strengthening his own skills in production-level tools and source control while helping the club grow into a hub for collaborative innovation.<br /> <br />

                                In the new year, Elyas wishes to see AISA hosting successful competitions, fostering collaborative projects, and establishing partnerships with companies to create more industry opportunities. Join Elyas as he helps AISA thrive and become a cornerstone for students passionate about AI!
                                </p>
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {brand_off}
                                alt="AI Club Icon"          
                                />  
                                <h2>Brand Officer</h2>
                                <p>
                                Meet Andy Tran, AISA’s Brand Strategist! Originally from Vietnam and raised in Colorado, Andy is a second-year Computer Science major at CU Denver with a passion for combining technology and creativity. In his free time, he enjoys DJing, attending music festivals, and exploring innovative ways to blend art and tech. <br /> <br />

                                As AISA’s Brand Strategist, Andy plays a key role in shaping the organization’s public image through strategic communication, compelling promotional materials, and impactful event marketing. With hands-on experience in AI software development and product design at Pinnacol Assurance, along with research and branding roles at CU Denver, Andy is committed to making AI accessible and exciting for everyone. His work at AISA allows him to deepen his knowledge of data science and AI, equipping him with the skills to advance his career and excel in the tech industry. <br /> <br />

                                In the future, Andy sees AISA becoming a thriving, inclusive community where students can explore cutting-edge AI technologies and discover opportunities for innovation and growth. Let’s join him in transforming AISA into a hub for inspiration, learning, and collaboration!
                                </p>
                            </div>
                            <div>
                                <img
                                className = "center"
                                src= {information_off}
                                alt="AI Club Icon"          
                                />
                                <h2>Information Officer</h2>
                                <p>
                                Meet Darya, AISA’s Informational Officer! Originally from Uzbekistan, Darya is a freshman majoring in Computer Science at CU Denver. Her journey in AI is just beginning, and she’s excited to build her pathway into the fields of AI and data science. When she’s not exploring the world of technology, she enjoys drawing and painting, finding inspiration in both art and innovation. <br /><br />

                                As Informational Officer, Darya focuses on taking detailed notes during meetings and ensuring effective communication within the club. Her goal is to keep everyone informed and aligned, helping AISA function as a cohesive and connected team.<br /> <br />

                                Darya joined AISA to improve organization and create a streamlined communication system, skills she believes are essential for her future career in technology and information management. In the coming year, she envisions AISA hosting larger events, reaching more students, and becoming the university’s most recognized and go-to AI club on campus. Let’s see how Darya and AISA will thrive and grow this year! <br />
                                </p>
                            </div>
    
                        </Slider>
                    </div>
            </div>
        </section>
        </FadeInComponent>

        </div>

       

    );
};

export default AboutUs;
