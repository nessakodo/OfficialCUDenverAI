import React from "react";
import { Link as RouterLink } from "react-router-dom";
import './Rules.css';

function Rules() {
  return (
    <div className="rules-container">

      {/* Sidebar Navigation */}
      <div className="hackathon-nav">
        <ul>
          <li><RouterLink to="/events/hackathon2025">Hackathon Info</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/prizes">Prizes</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/resources">Resources</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/rules">Rules</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/faq">FAQ</RouterLink></li>
          <li><RouterLink to="/events/hackathon2025/leaderboard">Leaderboard</RouterLink></li>

        </ul>
      </div>

      <h1>Hackathon Rules</h1>

      <div className="rules-section">
        <h2>I. Eligibility & Registration</h2>
        <ol>
          <li>All current students at CU Denver are eligible.</li>
          <li>All participants must register online individually before the event.</li>
          <li>Teams may have a maximum of 4 people; participants may join pre-formed teams or form teams during the competition. All team members need to register themselves.</li>
          <li>Teams should be made up exclusively of accepted participants who are not organizers, judges, sponsors, or any other privileged position at the event.</li>
        </ol>
      </div>

      <div className="rules-section">
        <h2>II. Hackathon Tracks & Themes</h2>
        <ol>
          <li>Teams choose one of the following tracks: Healthcare, Finance, Transportation, Climate Change/Sustainability.</li>
          <li>Projects must address a real-world problem within the chosen theme and incorporate data analytics techniques.</li>
        </ol>
      </div>

      <div className="rules-section">
        <h2>III. Hackathon Project</h2>
        <ol>
          <li>Teams can use an idea they had before the event.</li>
          <li>Teams can work on an idea that they have worked on before (as long as they do not re-use code).</li>
          <li>Teams can work on ideas that have already been done. If somebody wants to work on a common idea they will be allowed to do so and will be judged on the quality of their idea.</li>
          <li>Teams can use libraries, frameworks, or open-source code in their projects. Working on a project before the event and open sourcing it for the sole purpose of using the code during the event is against the spirit of the hackathon and is not allowed.</li>
          <li>All work submitted needs to be done by the teams. We reserve the right to ask for proof of work if we suspect your work is not your own as you claim.</li>
          <li>Teams must credit the tools and resources they use in the building process. We recommend having a detailed readme.</li>
          <li>Teams must disclose any LLM/ChatGPT/AI usage, be clear on what you have made vs what you are using that already existed before. Using GPT wrappers is not allowed.</li>
          <li>Failure to credit and disclose will result in disqualification.</li>
          <li>Projects that violate the Code of Conduct are not allowed.</li>
          <li>Teams can be disqualified from the competition at the organizers' discretion. Reasons might include but are not limited to breaking the Competition Rules, breaking the Code of Conduct, or other unsporting behavior.</li>
        </ol>
      </div>

      <div className="rules-section">
        <h2>IV. Submission Requirements</h2>
        <ol>
          <li>Teams must submit their project to the hackathon page by the submission deadline.</li>
        </ol>

        <p className="sub-text">A project's submission must have two components to be eligible for judging:</p>
        <ul>
          <li>A link to the project's code repository with a brief description of the project in the readme.</li>
          <li>A presentation slide deck on your idea.</li>
        </ul>

        <p>
          After submission, teams will show their projects to the judges. Judging will take place in-person on April 18th.
          Teams will reserve a time slot and will be notified of their turn before presentation.
          At least one member of the team must be present to present their project to the judges in order for their submission to be considered for prizes.
        </p>
        <p>
          You are encouraged to present what you have done even if you weren’t able to finish. It's okay if you didn't finish working on your idea—that happens all the time!
          It's a chance to share with others what you learned and what you tried to build—that's what hackathon’s all about!
        </p>
      </div>
    </div>
  );
}

export default Rules;