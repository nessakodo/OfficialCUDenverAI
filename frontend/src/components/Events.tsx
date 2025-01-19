import React from "react";
import { Link } from "react-router-dom";
import "./Events.css";


function Events() {
      // Event data array containing information about each event
  const events = [
    {
      id: 1,
      location: "Auraria Campus",
      name: "Decoy Challenge",
      date: "March 5, 2025",
      time: "3 PM - 6 PM",
      description:
        "Dive into the world of adversarial machine learning with this hands-on challenge to fool robust classifiers.",
      image: require("./images/vicente.jpg"),
    },
    {
      id: 2,
      location: "CU Denver",
      name: "AI Research Symposium",
      date: "March 10, 2025",
      time: "10 AM - 4 PM",
      description:
        "Showcasing cutting-edge research in artificial intelligence and machine learning.",
      image: require("./images/download.jpg"),
    },
    {
      id: 3,
      location: "Online",
      name: "AI Ethics Workshop",
      date: "March 15, 2025",
      time: "1 PM - 3 PM",
      description:
        "Explore the ethical challenges and responsibilities associated with artificial intelligence.",
      image: require("./images/download.jpg"),
    },
    {
        id: 4,
        location: "Online",
        name: "AI Ethics Workshop",
        date: "March 15, 2025",
        time: "1 PM - 3 PM",
        description:
          "Explore the ethical challenges and responsibilities associated with artificial intelligence.",
        image: require("./images/download.jpg"),
      },
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
        <button className="JoinUsButton">
          <Link to="/join">Join Us</Link>
        </button>
      </header>

      {/* Featured Event Section */}
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
          <button className="RegisterButton">Register</button>

        </div>
        <div className="FeaturedEventImage">
          <img src={events[0].image} alt={events[0].name} />
        </div>
      </section>

      {/* Events Grid */}
      <div className="EventsGrid">
        {events.slice(1).map((event) => (
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
              <button className="RegisterButton">Register</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Events;
