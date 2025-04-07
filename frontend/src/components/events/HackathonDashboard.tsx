import React, { useState, useEffect } from 'react';
import './HackathonDashboard.css';
import { auth, login, logout } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

const HackathonDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'team' | 'submission' | 'announcements' | 'schedule' | 'leaderboard'>('team');
  const [user, setUser] = useState<User | null>(null);

  const [teamData, setTeamData] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let response;
        switch (activeTab) {
          case 'team':
            response = await fetch('http://localhost:8000/api/team');
            setTeamData(await response.json());
            break;
          case 'announcements':
            response = await fetch('http://localhost:8000/api/announcements');
            setAnnouncements(await response.json());
            break;
          case 'schedule':
            response = await fetch('http://localhost:8000/api/schedule');
            setSchedule(await response.json());
            break;
          case 'leaderboard':
            response = await fetch('http://localhost:8000/api/leaderboard');
            setLeaderboard(await response.json());
            break;
          default:
            break;
        }
      } catch (err: any) {
        setError('Failed to fetch data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    fetchData();
  }, [activeTab]);

  if (!user) {
    return (
      <div className="login-container">
        <h2>Please sign in with GitHub to access the dashboard</h2>
        <button onClick={login} className="login-btn">Sign in with GitHub</button>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <span className="user-info">Signed in as {user.displayName || user.email}</span>
        <button onClick={logout}>Logout</button>
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
            {/* Map teammates*/}
            <ul>
              {loading ? <p>Loading...</p> : (
               <ul>
              {teamData.map((member: any) => (
                <li>{member.user_name} - {member.user_email}</li>
              ))}
            </ul>
          )}
            </ul>
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
            <h2>announcements</h2>
            <ul>
              {/* Render live announcements */}
              {loading ? <p>Loading...</p> : (
               <ul>
              {teamData.map((member: any) => (
                <li key={member.id}>{member.name} - {member.email}</li>
              ))}
            </ul>
          )}
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
          <div className="leaderboard-section">
            <h2>Leaderboard</h2>
            <p>View real-time team rankings here.</p>

            {loading ? (
              <p>Loading...</p>
            ) : (
              <table className="leaderboard-table">
                <thead>
                  <tr>
                    <th>Rank</th>
                    <th>Team Name</th>
                    <th>Presentation Score</th>
                    <th>Innovation Score</th>
                    <th>Usability Score</th>
                    <th>Total Score</th>
                  </tr>
                </thead>
                <tbody>
                  {leaderboard
                    .sort((a: any, b: any) => b.total_score - a.total_score) // sort by total score descending
                    .map((team: any, index: number) => (
                      <tr key={team.team_id || index}>
                        <td>{index + 1}</td>
                        <td>{team.team_name}</td>
                        <td>{team.presentation_score}</td>
                        <td>{team.innovation_score}</td>
                        <td>{team.usability_score}</td>
                        <td>{team.usability_score + team.presentation_score+team.innovation_score}</td>
                      </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HackathonDashboard;
