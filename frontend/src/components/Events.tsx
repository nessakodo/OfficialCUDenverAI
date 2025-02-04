import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";
import { useNavigate } from 'react-router-dom';


function Events() {

  const navigate = useNavigate();
  

      // Event data array containing information about each event
  const events = [
    /*
    {
      id: 1,
      location: "CU Denver",
      name: "DSAI Symposium",
      date: "November 1, 2024",
      time: "10 AM - 4 PM",
      description:
        "Showcasing winners of the decoy challenge competition.",
      image: require("./images/group.jpg"),
    }
      */
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
        <button className="JoinUsButton" onClick={() => {navigate('/home', { state: { scrollTo: 'FeaturedProject' } }); }}>
          Join
        </button>
      </header>


      {/* Featured Event Section */}
      {/*
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
          <button className="LearnMoreButton">Learn More</button>

        </div>
        <div className="FeaturedEventImage">
          <img src={events[0].image} alt={events[0].name} />
        </div>
      </section>
*/}

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
                <button className="LearnMoreButton">Learn More</button>
              </div>
            </div>
          ))
        ) : (
          <p className="NoEventsMessage">No events available at the moment.</p>
        )}
      </div>
    </div>
  );
}

export default Events;
