import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import "./Events.css";
import Particles from "react-tsparticles";

function Events() {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setUnlocked(true); // Simulates unlocking effect after delay
    }, 4000);
  }, []);

  return (


    <div className="EventsPage">

      {/* Header Section */}
      <header className="EventsHeader">
        <h1>Upcoming Events</h1>
        <h2>
          Empowering the next generation of AI innovators through workshops,
          challenges, and discussions.
        </h2>
        <button 
          className="JoinUsButton" 
          onClick={() => navigate('/home', { state: { scrollTo: 'FeaturedProject' } })}
        >
          Join
        </button>
      </header>


      {/* Typing Animation */}
      <div className="TypingAnimation">
        <TypeAnimation
          sequence={[
            "Loading upcoming events...",
            1000,
            "AI Challenge - Coming Soon!",
            1500,
            "Workshops & Networking - Stay Tuned!",
            1500
          ]}
          wrapper="span"
          speed={50}
          repeat={Infinity}
        />
      </div>
    </div>
  );
}

export default Events;