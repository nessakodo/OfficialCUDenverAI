import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import './Faq.css';

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. What is this hackathon?",
      answer: (
        <>
          <p>This is a dynamic, cross-disciplinary event that gathers students from varied academic backgrounds to address issues through creativity and teamwork. This hackathon highlights how innovative solutions (“hacks”) can emerge from limited resources and collaborative thinking within limited timeframes.</p>
          <p>Participants form teams to design actionable ideas. The diverse team expertise elevates the learning experience. The event concludes with teams showcasing their work to a panel of judges and their peers. Winners are awarded monetary prizes based on their innovation and presentation. We emphasize well-being over burnout—no sleepless nights required! Meals, snacks, and hydration are provided.</p>
        </>
      ),
    },
    {
      question: "2. Who is eligible to participate?",
      answer: <p>All students from CU Denver are welcome to participate, regardless of their school year, major or background.</p>,
    },
    {
      question: "3. How long is the hackathon?",
      answer: (
        <ul>
          <li><strong>April 16th (5pm - 7pm):</strong> Teams check-in, attend the opening ceremony, and get briefed.</li>
          <li><strong>April 17th (all-day):</strong> Work on ideas. No official events, but support is available on request.</li>
          <li><strong>April 18th (12pm - 5pm):</strong> Team presentations and closing ceremony.</li>
        </ul>
      ),
    },
    {
      question: "4. What are the hackathon tracks?",
      answer: <p>Healthcare, Finance, Transportation, and Climate Change/Sustainability.</p>,
    },
    {
      question: "5. Do I need to sign up with a team?",
      answer: <p>No, you can sign up solo. We’ll help you form a team before the hackathon.</p>,
    },
    {
      question: "6. What are the team requirements?",
      answer: <p>Teams can have up to 4 members. Everyone must register individually. Diverse backgrounds are encouraged!</p>,
    },
    {
      question: "7. What prizes are available?",
      answer: <p>You can check out the prizes in the prizes page, we have a ton of awesome items that you can win, be sure to check them out!</p>,
    },
    {
      question: "8. Do I need prior experience with AI or data science?",
      answer: <p>Nope! All levels are welcome, especially if you're eager to learn and collaborate.</p>,
    },
    {
      question: "9. Why should I participate?",
      answer: (
        <>
          <p>This hackathon builds key skills like:</p>
          <ul>
            <li>Idea generation</li>
            <li>Problem-solving</li>
            <li>Teamwork</li>
            <li>Project management</li>
            <li>Public speaking</li>
          </ul>
          <p>You'll also connect with peers, faculty, and industry mentors — and yes, there’s swag!</p>
        </>
      ),
    },
    {
      question: "10. What resources are available to participants?",
      answer: <p>You’ll have access to public datasets like RTD and Denver Open Data Catalog.</p>,
    },
    {
      question: "11. What requirements are there for the final idea?",
      answer: <p>Ideas must incorporate AI, ML, or data science components in their solution.</p>,
    },
  ];

  return (
    <div className="faq-container">

      {/* Sidebar Navigation */}
      <div className="hackathon-nav">
        <ul>
            <li><RouterLink to="/events/hackathon2025">Hackathon Info</RouterLink></li>
            <li><RouterLink to="/events/hackathon2025/prizes">Prizes</RouterLink></li>
            <li><RouterLink to="/events/hackathon2025/resources">Resources</RouterLink></li>
            <li><RouterLink to="/events/hackathon2025/faq">FAQ</RouterLink></li>
            <li><RouterLink to="/events/hackathon2025/rules">Rules</RouterLink></li>         
        </ul>
      </div>

      <h1>Frequently Asked Questions</h1>

      {faqs.map((faq, index) => (
        <div className="faq-item" key={index} onClick={() => toggleFAQ(index)} style={{ cursor: "pointer" }}>
          <h3>{faq.question}</h3>
          {openIndex === index && (
            <div className="faq-answer">
              {faq.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default FAQ;