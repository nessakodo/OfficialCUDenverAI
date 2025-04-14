import React, { useState, useEffect } from "react";
import './AdminDashboard.css';

interface Submission {
  teamName: string;
  projectTitle: string;
  repoLink: string;
  slideLink: string;
  track: string;
}

function AdminDashboard() {
  const [submissions, setSubmissions] = useState<Submission[]>([]);

  useEffect(() => {
    // We'll fetch this from our HACKATHON_TEAMS table 
    setSubmissions([
      {
        teamName: "Team Phoenix",
        projectTitle: "AI for Health Equity",
        repoLink: "https://github.com/example/team-phoenix",
        slideLink: "https://drive.google.com/example",
        track: "Healthcare",
      },
      {
        teamName: "DataWizards",
        projectTitle: "Green Route Optimizer",
        repoLink: "https://github.com/example/datawizards",
        slideLink: "https://drive.google.com/example2",
        track: "Transportation",
      },
    ]);
  }, []);

  return (
    <div className="judges-dashboard">
      <h1>Judges Dashboard</h1>
      <div className="submission-list">
        {submissions.map((submission, index) => (
          <div className="submission-card" key={index}>
            <h2>{submission.projectTitle}</h2>
            <p><strong>Team:</strong> {submission.teamName}</p>
            <p><strong>Track:</strong> {submission.track}</p>
            <a href={submission.repoLink} target="_blank" rel="noopener noreferrer">View Code</a><br />
            <a href={submission.slideLink} target="_blank" rel="noopener noreferrer">View Slides</a>
            
            {/* Scoring Form Placeholder */}
            <div className="score-form">
              <label>Technical Depth (0-10):</label>
              <input type="number" min="0" max="10" />

              <label>Creativity (0-10):</label>
              <input type="number" min="0" max="10" />

              <label>Feasibility (0-10):</label>
              <input type="number" min="0" max="10" />

              <label>Comments:</label>
              <textarea />

              <button>Submit Score</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminDashboard;