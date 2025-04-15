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
  const [selectedTeam, setSelectedTeam] = useState('');
  const [judges, setJudges] = useState([]);
  const [scores, setScores] = useState({
    judge_id: '', 
    team_id: '',
    notes: '',
    problem_solution: 0,
    impact_feasibility: 0,
    technical_depth: 0,
    innovation_creativity: 0,
    qa_responses: 0,
    presentation_clarity: 0,
    user_centered_design: 0,
  });

  const [authenticated, setAuthenticated] = useState(false);
  const [adminInput, setAdminInput] = useState('');

  const ADMIN_PASSWORD = process.env.REACT_APP_ADMIN_PASSWORD

  useEffect(() => {
    const isAuthed = localStorage.getItem('admin-authenticated') === 'true';
    setAuthenticated(isAuthed);
  }, []);

  const handleAuth = () => {
    if (adminInput === ADMIN_PASSWORD) {
      setAuthenticated(true);
      localStorage.setItem('admin-authenticated', 'true');
    } else {
      alert('Incorrect password');
    }
  };

  // Fetch teams
  useEffect(() => {
    fetch('http://localhost:8080/api/teams')
      .then(res => res.json())
      .then(setTeams)
      .catch(err => console.error("Error loading teams", err));
  }, []);

  // Fetch submissions
  useEffect(() => {
    fetch('http://localhost:8080/api/submissions')
      .then(res => res.json())
      .then(setSubmissions)
      .catch(err => console.error("Error loading submissions", err));
  }, []);

    // Fetch Judges
    useEffect(() => {
      fetch('http://localhost:8080/api/judges')
        .then(res => res.json())
        .then(setJudges)
        .catch(err => console.error("Error loading judges", err));
    }, []);

  if (!authenticated) {
    return (
      <div className="admin-container">
        <h2>Admin Access</h2>
        <p>Please enter the admin password to continue:</p>
        <input
          type="password"
          value={adminInput}
          onChange={(e) => setAdminInput(e.target.value)}
        />
        <button onClick={handleAuth}>Enter</button>
      </div>
    );
  }

  const handleScoreChange = (field, value) => {
    setScores(prev => ({ ...prev, [field]: value }));
  };

  const handleTeamSelect = (e) => {
    const id = e.target.value;
    setSelectedTeam(id);
    setScores(prev => ({ ...prev, team_id: id }));
  };

  const submitScores = async () => {
    try {
      const response = await fetch('http://localhost:8080/api/scores', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(scores),
      });
  
      const result = await response.json();
      if (response.ok) {
        alert('Scores submitted!');
  
        // Reset form
        setScores({
          judge_id: '', 
          team_id: '',
          notes: '',
          problem_solution: 0,
          impact_feasibility: 0,
          technical_depth: 0,
          innovation_creativity: 0,
          qa_responses: 0,
          presentation_clarity: 0,
          user_centered_design: 0,
        });
        setSelectedTeam('');
      } else {
        alert(`Error: ${result.error}`);
      }
    } catch (err) {
      console.error('Failed to submit scores:', err);
      alert('Something went wrong.');
    }
  };


  return (
    <div className="admin-container">
      <h1>Admin Dashboard</h1>
      <div className="tabs">
        <button onClick={() => setTab('teams')}>Teams</button>
        <button onClick={() => setTab('submissions')}>Submissions</button>
        <button onClick={() => setTab('scores')}>Score Teams</button>
        <button onClick={() => setTab('judges')}>Judges</button>
      </div>

      {tab === 'teams' && (
        <div className="section">
          <h2>All Teams</h2>
          <ul>
            {teams.map(team => (
              <li key={team.team_id}>
                <strong>{team.team_name || `Team ${team.team_id}`}</strong><br />
                ID: {team.team_id}
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
                <strong>{sub.project_name}</strong><br />
                Team ID: {sub.team_id}<br />
                <a href={sub.github_link} target="_blank" rel="noreferrer">GitHub Repo</a><br />
                <a href={sub.presentation_link} target="_blank" rel="noreferrer">Presentation</a>
              </li>
            ))}
          </ul>
        </div>
      )}

      
      {tab === 'judges' && (
              <div className="section">
                <h2>Judges and their Ids</h2>
                <ul>
                  {judges.map(judge => (
                    <li key={judge.judge_id}>
                    <strong>{judge.name}</strong><br />
                    ID: {judge.judge_id}
                  </li>
                  ))}
                </ul>
              </div>
            )}

      {tab === 'scores' && (
        <div className="section">
          <h2>Score a Team</h2>
          <select onChange={handleTeamSelect} value={selectedTeam}>
            <option value="">Select a team</option>
            {teams.map(team => (
              <option key={team.team_id} value={team.team_id}>
                {team.team_name || `Team ${team.team_id}`}
              </option>
            ))}
          </select>

          {selectedTeam && (
            <div className="score-form">
              <label>JudgeId: <input type="number" onChange={e => handleScoreChange('judge_id', e.target.value)} /></label>
              <label>Problem/Solution: <input type="number" onChange={e => handleScoreChange('problem_solution', e.target.value)} /></label>
              <label>Impact/Feasibility: <input type="number" onChange={e => handleScoreChange('impact_feasibility', e.target.value)} /></label>
              <label>Technical Depth: <input type="number" onChange={e => handleScoreChange('technical_depth', e.target.value)} /></label>
              <label>Innovation/Creativity: <input type="number" onChange={e => handleScoreChange('innovation_creativity', e.target.value)} /></label>
              <label>Q&A Responses: <input type="number" onChange={e => handleScoreChange('qa_responses', e.target.value)} /></label>
              <label>Presentation Clarity: <input type="number" onChange={e => handleScoreChange('presentation_clarity', e.target.value)} /></label>
              <label>User-Centered Design: <input type="number" onChange={e => handleScoreChange('user_centered_design', e.target.value)} /></label>
              <label>Notes (optional): <textarea onChange={e => handleScoreChange('notes', e.target.value)} /></label>
              <button onClick={submitScores}>Submit Scores</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;