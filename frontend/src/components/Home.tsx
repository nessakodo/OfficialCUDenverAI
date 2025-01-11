import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import './home.css'; 
import img from './images/group.jpg';
import neuralnetwork from './images/5-AI-Advancements-to-Expect-in-the-Next-10-Years-scaled.jpeg'
import robotics from './images/sick-sponsored-featured-image-july2023-article1.jpg'
import icon from './images/club-rxCX8m8Y.png';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';




function Home() {
    ///////////////////////////
    //States
    ///////////////////////////
    const dispatch = useDispatch();
    const history = useNavigate();
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
            <div className="HomePage" >
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
                        <img src={img} alt="AI Club"></img>
                    </div>

                </div>

                <div className="UpcomingEventsTitle">
                    <h4>Upcoming Events</h4>
                </div>
                <div className="UpcomingEvents">
                

                <div className="Event1">
                <Card sx={{ maxWidth: 1000}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="240"
                        image={img}
                        alt=""
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        Panel Discussion: The Future of AI Ethics
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Explore the ethical challenges of artificial intelligence in this engaging panel discussion featuring experts from academia and industry. Discuss topics such as AI bias, data privacy, and the societal impact of automation. Gain insights into the responsibilities of AI practitioners in shaping a fair and equitable future.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Show More
                        </Button>
                    </CardActions>
                    </Card>
                </div>

                <div className="Event2">
                <Card sx={{ maxWidth: 1000, maxHeight: 800}}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="240"
                        image={robotics}
                        alt=""
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                        AI Hackathon: Innovate with Machine Learning
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Join us for an exciting 24-hour hackathon where students collaborate to solve real-world problems using machine learning and AI. With mentorship from industry professionals, participants will create innovative solutions, compete for prizes, and gain valuable hands-on experience in AI development.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Show More
                        </Button>
                    </CardActions>
                    </Card>
                </div>

                <div className="Event3">
            <Card sx={{ maxWidth: 1000, maxHeight: 800 }}>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="240"
                        image={neuralnetwork}
                        alt=""
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                         Workshop: Introduction to Neural Networks
                        </Typography>
                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        Dive into the fascinating world of neural networks in this beginner-friendly workshop. Learn the basics of how neural networks function, explore their applications, and build your first AI model using Python and TensorFlow. No prior experience is required—just curiosity and enthusiasm!


                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions >
                        <Button size="small" color="primary" >
                        Show More
                        </Button>
                    </CardActions>
                    </Card>
                
                </div>
                
            </div>
            
           

                

            </div>
        );
}

export default Home;