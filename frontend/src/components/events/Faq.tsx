/**
 * This will be the page for the hackathon with route /events/hackathon2025
 */

/*Functionality imports*/

import React, { useState, useEffect} from "react";
import { useSelector, useDispatch } from 'react-redux'; 
import { setBlogs, setError } from "../../actions/BlogsActions";
import { useNavigate } from 'react-router-dom';
import { Link, Element } from "react-scroll";
import './Faq.css'


/* UI Imports */

/* Image Imports */



function FAQ() {
    ///////////////////////////
    // States
    ///////////////////////////


    ///////////////////////////
    // Functions
    ///////////////////////////


    ///////////////////////////
    // TSX Rendering
    ///////////////////////////

    return (
        <div className="faq-container">
            <h1>Frequently Asked Questions</h1>
            <div className="faq-item">
                <h3>1. What is this hackathon?</h3>
                <p>This is a dynamic, cross-disciplinary event that gathers students from varied academic backgrounds to address issues through creativity and teamwork. This hackathon highlights how innovative solutions (“hacks”) can emerge from limited resources and collaborative thinking within limited timeframes. Participants form teams to design actionable ideas. The diverse team expertise elevates the learning experience. The event concludes with teams showcasing their work to a panel of judges and their peers. Winners are awarded monetary prizes based on their innovation and presentation. We emphasize well-being over burnout—no sleepless nights required! Meals, snacks, and hydration are provided.</p>
            </div>
            <div className="faq-item">
                <h3>2. Who is eligible to participate?</h3>
                <p>All students from CU Denver are welcome to participate, regardless of their school year, major or background.</p>
            </div>
            <div className="faq-item">
                <h3>3. How long is the hackathon?</h3>
                <p>The hackathon runs from April 16th to April 18th.</p>
                <ul>
                    <li><strong>April 16th (5pm - 7pm):</strong> Teams check-in, attend the opening ceremony kicking off the event & get briefed on the details of the hackathon.</li>
                    <li><strong>April 17th (all-day):</strong> Teams work on their ideas (Identify the problem & ideate, prototype the solution). <strong>No official activities will occur on this day. The teams can work on their own, and support can be provided upon request.</strong></li>
                    <li><strong>April 18th (12pm - 5pm):</strong> Team presentations to judges and results announced at the Closing Ceremony by the end of the day.</li>
                </ul>
            </div>
            <div className="faq-item">
                <h3>4. What are the hackathon tracks?</h3>
                <p>The event features four tracks: Healthcare, Finance, Transportation, and Climate Change/Sustainability. Teams choose one of these topics and focus on developing innovative solutions to the issues within those areas.</p>
            </div>
            <div className="faq-item">
                <h3>5. Do I need to sign up with a team?</h3>
                <p>No, you can sign up solo. There will be opportunities for you to form a team with fellow innovators before the hackathon.</p>
            </div>
            <div className="faq-item">
                <h3>6. What are the team requirements?</h3>
                <p>Teams can consist of up to 4 members. Teams can form before the event or during the opening session. All members need to individually register. There are no requirements for expertise or background, but diverse interdisciplinary teams often create the most exciting and well-developed ideas.</p>
            </div>
            <div className="faq-item">
                <h3>7. What prizes are available?</h3>
                <p>Prizes are awarded for the top 3 teams with the highest score/best performance. The 1st, 2nd, and 3rd place teams will receive $100, $75, and $50, respectively, with engraved awards. Other notable standout teams will receive honorable mentions and certificates.</p>
            </div>
            <div className="faq-item">
                <h3>8. Do I need prior experience with AI or data science?</h3>
                <p>Basic familiarity with AI or data science is helpful, but we welcome participants from all backgrounds who are eager to learn and collaborate.</p>
            </div>
            <div className="faq-item">
                <h3>9. Why should I participate?</h3>
                <p>This hackathon is a great opportunity to develop integral skills that are applicable across fields and career paths:</p>
                <ul>
                    <li>Idea generation</li>
                    <li>Problem-solving</li>
                    <li>Teamwork</li>
                    <li>Project management</li>
                    <li>Public speaking</li>
                </ul>
                <p>It is also a place for you to connect with CU Denver faculty, industry professionals, and peers. There are also monetary awards, recognition certificates, and swag (notebooks and bags) for you to take home. Lastly, there is the sense of accomplishment and fulfillment from tackling societal challenges, making an impact. This environment not only boosts your resume but also prepares you for your future career.</p>
            </div>
            <div className="faq-item">
                <h3>10. What resources are available to participants?</h3>
                <p>Participants will use provided datasets (e.g., RTD, Denver Open Data Catalog) to research and build their solutions.</p>
            </div>
            <div className="faq-item">
                <h3>11. What requirements are there for the final idea?</h3>
                <p>The only requirement for the final idea is that it should incorporate aspects of AI, ML, and data science in the build.</p>
            </div>
        </div>
    );
}

export default FAQ;
