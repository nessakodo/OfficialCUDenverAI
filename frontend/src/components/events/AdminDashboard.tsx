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
  const [tab, setTab] = useState('teams');
  const [teams, setTeams] = useState([]);
  const [submissions, setSubmissions] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [scores, setScores] = useState({
    problem_solution: 0,
    impact_feasibility: 0,
    technical_depth: 0,
    innovation_creativity: 0,
  });

  useEffect(() => {
    // Fetch all teams
    fetch('/api/teams').then(res => res.json()).then(setTeams);
    // Fetch all submissions
    fetch('/api/submissions').then(res => res.json()).then(setSubmissions);
  }, []);

  const handleScoreChange = (field, value) => {
    setScores(prev => ({ ...prev, [field]: parseInt(value) }));
  };

  const submitScores = async () => {
    const res = await fetch(`/api/scores/${selectedTeam.team_id}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(scores),
    });

    if (res.ok) alert('Scores submitted!');
    else alert('Error submitting scores.');
  };

  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="tabs">
        <button onClick={() => setTab('teams')}>Teams</button>
        <button onClick={() => setTab('submissions')}>Submissions</button>
        <button onClick={() => setTab('scores')}>Score Teams</button>
      </div>

      {tab === 'teams' && (
        <div className="section">
          <h2>All Teams</h2>
          <ul>
            {teams.map(team => (
              <li key={team.team_id}>
                <strong>{team.team_name}</strong><br />
                Members: {team.members?.map(m => m.user_name).join(', ')}
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === 'submissions' && (
        <div className="section">
          <h2>All Submissions</h2>
          <ul>
            {submissions.map(sub => (
              <li key={sub.submission_id}>
                <strong>Team ID:</strong> {sub.team_id}<br />
                <a href={sub.github_link} target="_blank" rel="noreferrer">GitHub Repo</a><br />
                <a href={sub.file_path} target="_blank" rel="noreferrer">Presentation</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      {tab === 'scores' && (
        <div className="section">
          <h2>Score a Team</h2>
          <select onChange={e => {
            const team = teams.find(t => t.team_id === parseInt(e.target.value));
            setSelectedTeam(team);
          }}>
            <option>Select a team</option>
            {teams.map(team => (
              <option key={team.team_id} value={team.team_id}>
                {team.team_name}
              </option>
            ))}
          </select>

          {selectedTeam && (
            <div className="score-form">
              <label>
                Problem/Solution:
                <input type="number" min="0" max="20" onChange={e => handleScoreChange('problem_solution', e.target.value)} />
              </label>
              <label>
                Impact/Feasibility:
                <input type="number" min="0" max="20" onChange={e => handleScoreChange('impact_feasibility', e.target.value)} />
              </label>
              <label>
                Technical Depth:
                <input type="number" min="0" max="20" onChange={e => handleScoreChange('technical_depth', e.target.value)} />
              </label>
              <label>
                Innovation/Creativity:
                <input type="number" min="0" max="20" onChange={e => handleScoreChange('innovation_creativity', e.target.value)} />
              </label>
              <button onClick={submitScores}>Submit Scores</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;