/**
 * This will be the page for the hackathon with route /events/hackathon2025
 */

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setBlogs, setError } from "../../actions/BlogsActions";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { motion } from "framer-motion";
import { PieChart } from "@mui/x-charts/PieChart";
import { Box, Paper, Slider, useMediaQuery, Autocomplete } from "@mui/material";
import Countdown from "react-countdown";
import { useInView } from "react-intersection-observer";

import "./Hackathon.css";
import styles from "./HackathonPage.module.css";

/* Images */
import BagPrize from "../images/Hackathon/bag.png";
import Engraving from "../images/Hackathon/engraving.png";
import vision from "../images/vision.jpg";
import audience from "../images/audience.jpg";
import event_img from "../images/eventimg.jpg";
import finance from "../images/finance.jpg";
import healthcare from "../images/healthcare.jpg";
import climatechange from "../images/climate.jpg";
import transportation from "../images/transportation.jpg";
import OllamaPic from "../images/Ollama.png";
import Judge1 from "../images/Hackathon/DaveOgle.png";
import Judge2 from "../images/Hackathon/ShawnMccarthy.jpg";
import Judge3 from "../images/Hackathon/YuDu.jpg";
import Judge4 from "../images/Hackathon/SteveHosie.png";

function Hackathon() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMediaQuery("(max-width:500px)");
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.001,
  });


  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      return <span>Started!</span>;
    }
    return (
      <div>
        {days} Days {hours} Hours {minutes} Minutes {seconds} Seconds
      </div>
    );
  };

  return (
    <div className="hackathon-container">
      {/* Countdown */}
        <div className="Countdown">
          <h2>Countdown to Hackathon</h2>
          <Countdown date={new Date("2025-04-16T09:00:00")} renderer={renderer} />
        </div>

      {/* Nav */}
      <div className="hackathon-nav">
        <ul>
          <li><Link to="hero" smooth={true} duration={500}>Hero</Link></li>
          <li><Link to="details" smooth={true} duration={500}>Event Details</Link></li>
          <li><Link to="timeline" smooth={true} duration={500}>Timeline</Link></li>
          <li><Link to="judges" smooth={true} duration={500}>Judges</Link></li>
          <li><Link to="judgingcriteria" smooth={true} duration={500}>Judging Criteria</Link></li>
          <li><RouterLink to="/events/hackathon2025/prizes">Prizes</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/resources">Resources</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/rules">Rules</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/faq">FAQ</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/leaderboard">Leaderboard</RouterLink></li>
        </ul>
      </div>

      {/* Hero */}
      <Element name="hero">
          <section className="hero">
            <h1>AI Club Hackathon 2025</h1>
            <h2>Innovate, Build, and Compete with the Best!</h2>
            <a href="https://forms.office.com/Pages/ResponsePage.aspx?id=yjczVhelGkKq4BqltBT9f0pyyXMYCX5OiVgHckMlvl5UNDJQU0pPQUpINjhDNFRNQVU2TFc0WVZGNCQlQCN0PWcu&origin=QRCode
"><button className="register-btn">Register Now</button></a>
            
            <RouterLink to="/hackathon-dashboard"><button className="register-btn">Hackathon Dashboard</button></RouterLink>

          </section>
      </Element>

      {/* Event Details */}
      <Element name="details">
        <section className="details">
          <div className="start">
            <h2 className="title">Auraria Hack 2025</h2>
            <p className="subtitle">
              A hackathon designed to bring students together to solve real-world challenges using AI.
            </p>
          </div>
          <div className="horizontal-context-boxes">
          {/* Vision */}
            <div className="content-box-1">
              <img src={vision} alt="Vision" className="content-img" />
              <h3>Vision</h3>
              <p>Foster interdisciplinary collaboration to solve real-world challenges using AI.</p>
            </div>

          {/* Audience */}
            <div className="content-box-1">
              <img src={audience} alt="Audience" className="content-img" />
              <h3>Target Audience</h3>
              <p>Any major is welcomed and no experience is needed.</p>
            </div>

          {/* Description */}
            <div className="content-box-1">
              <img src={event_img} alt="Event" className="content-img" />
              <h3>Event Description</h3>
              <p>This is a hackathon competition for CU Denver students focusing on AI's real-world impact.</p>
            </div>
            </div>

          {/* Tracks */}
          <h2 className="title">Tracks:</h2>
            <div className="tracks">
              {[{ img: healthcare, name: "Healthcare" }, { img: finance, name: "Finance" },
                { img: transportation, name: "Transportation" }, { img: climatechange, name: "Climate Change / Sustainability" }]
                .map((track, i) => (
                  <div className="content-box" key={i}>
                    <img src={track.img} alt={track.name} className="content-img" />
                    <ul><li>{track.name}</li></ul>
                  </div>
              ))}
            </div>
        </section>
      </Element>

      {/* Timeline */}
      <Element name="timeline">
        <section className={styles.timelineSection}>
          <h2 className="title">All <span className={styles.highlight}>activities</span> of this year's hackathon</h2>
          <div className={styles.timelineContainer}>
            {[
              { day: "Day 1 - April 16", events: ["Opening Ceremony (5:00 PM - 7:00 PM)"]},
              { day: "Day 2 - April 17", events: ["No scheduled event. Assistance provided as needed."] },
              { day: "Day 3 - April 18", events: ["Presentation (12 PM - 4 PM)", "Closing Ceremony (4 PM - 5 PM)"] },
            ].map(({ day, events}, i) => (
                <div className={styles.dayColumn}>
                  <h3>{day}</h3>
                  {events.map((e, j) => <div key={j} className={styles.eventBox}>{e}</div>)}
                </div>
            ))}
          </div>
        </section>
      </Element>

              {/* Hackathon Judges */}
      {
        <section className="judges">
        <h2 className="judges-title">Meet Our Judges</h2>
        <div className="judgeCardCover">
          {[{
            name: "Dave Ogle",
            image: Judge1,
            title: "Professor, CU Denver",
            description: "Former IBM Distinguished Engineer, current CS professor, deep expertise in systems engineering and student mentorship.",
            field: "Computer Science · Systems Architecture"
          },
          {
            name: "Shawn McCarthy",
            image: Judge2,
            title: "Vice President & Chief Architect at Manulife",
            description: "25+ years in global architecture and risk, CU Denver alum, PhD candidate, and educator focused on inclusive and ethical AI.",
            field: "AI Architecture · Risk Management · Global Systems"
          },
          {
            name: "Yu Du",
            image: Judge3,
            title: "Associate Professor, CU Denver Business School",
            description: "Yu specializes in analytics, optimization, and AI in business, combining academic insight with industry experience.",
            field: "Data Science · Business Analytics"
          },
          {
            name: "Steve Hosie",
            image: Judge4,
            title: "Cybersecurity Executive Advisor, Broadcom",
            description: "A cybersecurity leader with 37+ years in InfoSec, USMC veteran, IBM Champion, and passionate mentor in risk and compliance.",
            field: "Cybersecurity · Risk & Compliance"
          }].map((judge, i) => (
            <div className="judgeCard" key={i}>
              <img src={judge.image} alt={judge.name} className="judgeImage" />
              <h3 className="judgeName">{judge.name}</h3>
              <p className="judgeTitle">{judge.title}</p>
              <p className="judgeDescription">{judge.description}</p>
              <p className="judgeField"><strong>Field:</strong> {judge.field}</p>
            </div>
          ))}
        </div>
      </section>
        }

      {/* Judging Criteria */}
      <Element name="judgingcriteria">
      <h2 className="judges-title">Judging Criteria</h2>
        <section className="pieChart">
          <PieChart
            series={[{
              arcLabel: item => `${item.value}%`,
              arcLabelRadius: 150,
              innerRadius: 80,
              outerRadius: 240,
              data: [
                { id: 0, value: 20, label: "Problem & Solution", color: "#ED9898" },
                { id: 1, value: 20, label: "Impact & Feasibility", color: "#BBE394" },
                { id: 2, value: 20, label: "Technical Depth", color: "#FFD700" },
                { id: 3, value: 15, label: "Innovation & Creativity", color: "#800080" },
                { id: 4, value: 10, label: "Q&A Responses", color: "#FFA500" },
                { id: 5, value: 10, label: "Presentation & Clarity", color: "#008080" },
                { id: 6, value: 5, label: "User-Centered Design & UX", color: "#4169E1" },
              ],
              highlightScope: { fade: "global", highlight: "item" },
              faded: { innerRadius: 80, additionalRadius: -80, color: "gray" },
            }]}
            height={isMobile ? 800 : 500}
            width={isMobile ? 800 : 1200}
            margin={{ right: 0, top: 0 }}
            sx={{ fontWeight: "bold", fontSize: "1.5em" }}
            slotProps={{
              legend: {
                labelStyle: { fontSize: 20, fill: "blue" },
                direction: isMobile ? "row" : "column",
                position: isMobile
                  ? { horizontal: "middle", vertical: "bottom" }
                  : { horizontal: "right", vertical: "bottom" },
              },
            }}
          />
        </section>
      </Element>
    </div>
  );
}

export default Hackathon;
