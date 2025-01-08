import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom'; 

function Home() {
    ///////////////////////////
    //States
    ///////////////////////////
    const dispatch = useDispatch();
    const history = useHistory();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    
    ///////////////////////////
    //Functions
    ///////////////////////////


    ///////////////////////////
    //HTML Rendering
    ///////////////////////////
    return (
            <div className="HomePage">
                <div className="HeroTitle">
                    <h1> Empowering the Next Generation of AI Innovators </h1>
                    <h2> Fostering collaboration, innovation, and hands-on opportunities in AI, Data Science, and Machine Learning at CU Denver. </h2>
                    
                    <button>
                        <h3> Join Us </h3>
                    </button>


                    
                </div>

                <div className="WhoWeAre">
                    <h4> Who We Are </h4>

                    <p> The AI Student Association at CU Denver is a student-led organization dedicated to exploring the applications of artificial intelligence, data science, and machine learning. We provide a collaborative platform for students to connect, engage, and grow through hands-on projects, coding challenges, and research initiatives. Our mission is to bridge the gap between theory and practice by organizing events such as hackathons, workshops, and technical talks that equip students with the skills needed to excel in the AI industry. We focus on fostering an environment of innovation, collaboration, and professional development, ensuring that our members are prepared to tackle real-world challenges and contribute meaningfully to the field of AI. Whether you’re an experienced AI enthusiast or just getting started, the AI Student Association offers opportunities for learning, networking, and advancing your AI journey. </p>
                </div>


                <div className="FeaturedProject">
                    <div className="FP-Text">
                        <h4> Featured Project </h4>                  
                        <h5> D.E.C.O.Y. Challenge </h5>
                        <p>This challenge invites all Auraria Campus students to dive into the intriguing world of adversarial machine learning by crafting adversarial examples that can deceive a robust machine learning classifier trained on the CIFAR-10 dataset. Your mission is to create subtle but effective modifications to a set of test images, fooling the classifier into making incorrect predictions. This challenge is a perfect opportunity for students to explore model vulnerabilities, gain hands-on experience with adversarial techniques, and contribute to ongoing research in AI robustness and security.</p>

                    </div>
                    
                    <div className="FP-Image">
  
                    </div>

                </div>


                <div className="UpcomingEvents">
                    <h4> Upcoming Events </h4>

                    <div className="Event#1">
                        <h4> Title </h4>
                        
                        

                    </div>

                    <div className="Event#2">

                    </div>

                    <div className="Event#3">

                    </div>



                </div>


                

            </div>
        );
}

export default Home;