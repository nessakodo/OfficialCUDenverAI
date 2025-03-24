/*Functionality imports*/
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Events.css";


/* UI Imports */
import Particles from "react-tsparticles";
import { TypeAnimation } from "react-type-animation";

/* Image Imports */
import AurariaHack from './images/Hackathon/AurariaHack.png'
import GithubEvent from './images/Hackathon/GithubEvent.png'

function Events() {
  const navigate = useNavigate();
  const [unlocked, setUnlocked] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setUnlocked(true); // Simulates unlocking effect after delay
    }, 4000);
  }, []);

  const events = [
    {
      id: "hackathon2025",
      location: "CU Denver",
      name: "Auraria Hack 2025",
      date: "April 16-18, 2025",
      time: "10 AM - 4 PM",
      description:
        "Auraria Hack 2025 is a hackathon where students identify problems within areas such as healthcare, climate, transportation, finance and develop innovative solutions leveraging AI and machine learning. Whether you're a beginner or an experienced coder, this event provides a platform to build, compete, and showcase your skills. ",
      image: AurariaHack,
    },
    {
      id: "githubevent",
      location: "CU Denver",
      name: "Github Event",
      date: "March 31, 2025",
      time: "5 PM - 7 PM",
      description:
        "Github Foundations Certifications Workshop",
      image: GithubEvent,
    }
    
    
  ];

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

      <section className="FeaturedEvent">
        <div className="FeaturedEventText">
          <h2>Featured Event</h2>
          <h3>{events[0].name}</h3>
          <p>{events[0].description}</p>
          <p>
            <strong>Location:</strong> {events[0].location}
          </p>
          <p>
            <strong>Date:</strong> {events[0].date} | <strong>Time:</strong>{" "}
            {events[0].time}
          </p>
          <button 
                  className="JoinUsButton" 
                  onClick={() => navigate(events[0].id, { state: { scrollTo: 'FeaturedProject' } })}
                >
                  Learn More
            </button>
        </div>
        <div className="FeaturedEventImage">
          <img src={events[0].image} alt={events[0].name} />
        </div>
      </section>

      {/* Events Grid */}
      <div className="EventsGrid">
        {events.length > 1 ? (
          events.slice(1).map((event) => (
            <div className="EventCard" key={event.id}>
              <img src={event.image} alt={event.name} className="EventImage" />
              <div className="EventDetails">
                <h3>{event.name}</h3>
                <p>{event.location}</p>
                <p>
                  {event.date} | {event.time}
                </p>
                <p>{event.description.substring(0, 50)}...</p>
                <button 
                  className="JoinUsButton" 
                  onClick={() => navigate(event.id, { state: { scrollTo: 'FeaturedProject' } })}
                >
                  Learn More
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="NoEventsMessage">No events available at the moment.</p>
        )}
      </div>
    

      {/* Typing Animation:       
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
      </div>*/}

    </div>
  );
}

export default Events;