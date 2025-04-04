import React, { useState, useEffect } from 'react';
import './HackathonDashboard.css';

const HackathonDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'team' | 'submission' | 'announcements' | 'schedule' | 'leaderboard'>('team');

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <button onClick={() => setActiveTab('team')}>My Team</button>
        <button onClick={() => setActiveTab('submission')}>Project Submission</button>
        <button onClick={() => setActiveTab('announcements')}>Announcements</button>
        <button onClick={() => setActiveTab('schedule')}>Live Schedule</button>
        <button onClick={() => setActiveTab('leaderboard')}>Leaderboard</button>
        <a href="https://discord.com/invite/xEACjKzBA7" target="_blank" rel="noopener noreferrer">Discord</a>
      </nav>

      <div className="dashboard-content">
        {activeTab === 'team' && (
          <div>
            <h2>My Team</h2>
            <p>View your teammates and their contact info.</p>
            {/* Map teammates here */}
          </div>
        )}

        {activeTab === 'submission' && (
          <div>
            <h2>Project Submission</h2>
            <form className="submission-form">
              <label>Project Title</label>
              <input type="text" placeholder="Enter your project title" />

              <label>GitHub Link</label>
              <input type="url" placeholder="https://github.com/your-repo" />

              <label>Presentation File</label>
              <input type="file" accept=".pdf,.ppt,.pptx" />

              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {activeTab === 'announcements' && (
          <div>
            <h2>Announcements</h2>
            <ul>
              {/* Render live announcements */}
              <li>Welcome to the hackathon! 🎉</li>
            </ul>
          </div>
        )}

        {activeTab === 'schedule' && (
          <div>
            <h2>Live Schedule</h2>
            <p>Display real-time schedule here.</p>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div>
            <h2>Leaderboard</h2>
            <p>View real-time team rankings here.</p>
            {/* Scoreboard table */}
          </div>
        )}
      </div>
    </div>
  );
};

export default HackathonDashboard;