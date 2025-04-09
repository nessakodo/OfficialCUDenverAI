import React, { useState, useEffect } from 'react';
import './HackathonDashboard.css';
import { auth, login, logout } from './firebase';
import { onAuthStateChanged, User } from 'firebase/auth';

import githubimg from '../images/GithubEventImg.jpg'

const HackathonDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'team' | 'submission' | 'announcements' | 'schedule' | 'leaderboard' | 'feedback' >('team');
  const [user, setUser] = useState<User | null>(null);

  const [teamData, setTeamData] = useState([]);
  const [announcements, setAnnouncements] = useState([]);
  const [schedule, setSchedule] = useState([]);
  const [leaderboard, setLeaderboard] = useState([]);
  const [feedback, setFeedback] =  useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [emailVerified, setEmailVerified] = useState<boolean>(false);
  const [studentEmail, setStudentEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);
  //const [emailCode, setEmailCode] = useState('');
  //const [verificationStep, setVerificationStep] = useState<'entry' | 'code'>('entry');

  const [title, setTitle] = useState('');
  const [github, setGithub] = useState('');
  const [powerpoint, setPowerpoint] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', title);
    formData.append('github', github);
    formData.append('powerpoint', powerpoint);

    const res = await fetch('https://cudenver-ai.tech/api/submit', {
      method: 'POST',
      body: formData
    });
  
    if (res.ok) alert('Submitted!');
    else alert('Failed to submit.');
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unsubscribe();
  }, []);


  useEffect(() => {
  
    const checkEmailVerification = async () => {
      if (user) {
        const res = await fetch(`https://cudenver-ai.tech/api/verify-status?uid=${user.uid}`);
        const data = await res.json();
        setEmailVerified(data.verified);
      }
    };
    checkEmailVerification();
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        let response;
        switch (activeTab) {
          case 'team':
            response = await fetch('https://cudenver-ai.tech/api/team');
            setTeamData(await response.json());
            break;
          case 'announcements':
            response = await fetch('https://cudenver-ai.tech/api/announcements');
            setAnnouncements(await response.json());
            break;
          case 'schedule':
            response = await fetch('https://cudenver-ai.tech/api/schedule');
            setSchedule(await response.json());
            break;
          case 'leaderboard':
            response = await fetch('https://cudenver-ai.tech/api/leaderboard');
            setLeaderboard(await response.json());
            break;
          case 'feedback':
              response = await fetch('https://cudenver-ai.tech/api/feedback');
              setFeedback(await response.json());
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
      <div className="login-card">
        <img src={githubimg} alt="Logo" className="login-logo" />
        <h2 className="login-heading">Welcome to the Dashboard</h2>
        <p className="login-subtext">Sign in with GitHub to access your team and scores.</p>
        <button onClick={login} className="login-btn">
          Sign in with GitHub
        </button>
      </div>
    </div>
    );
  }

  if (user && !emailVerified) {
    return (
      <div className="verify-email-container">
        <div className="verify-email-card">
          <h2>Connect with your student email</h2>
          <p>Please enter your university-issued student email to proceed.</p>
          <input
            type="email"
            value={studentEmail}
            onChange={(e) => setStudentEmail(e.target.value)}
            placeholder="you@university.edu"
          />
          <button
            onClick={async () => {
              const res = await fetch('https://cudenver-ai.tech/api/save-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ uid: user.uid, student_email: studentEmail }),
              });
              if (res.ok) {
                setEmailVerified(true); // Automatically mark as verified
              } else {
                alert('Something went wrong. Please try again.');
              }
            }}
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="dashboard-container">
      <nav className="dashboard-nav">
        <span className="user-info">Signed in as {user.displayName || user.email}</span>
        <button onClick={() => setActiveTab('team')}>My Team</button>
        <button onClick={() => setActiveTab('submission')}>Project Submission</button>
        <button onClick={() => setActiveTab('announcements')}>Announcements</button>
        <button onClick={() => setActiveTab('schedule')}>Live Schedule</button>
        <button onClick={() => setActiveTab('leaderboard')}>Leaderboard</button>
        <button onClick={() => setActiveTab('feedback')}>Feedback</button>
        <a href="https://discord.com/invite/xEACjKzBA7" target="_blank" rel="noopener noreferrer">Discord</a>
        <button onClick={logout}>Logout</button>
      </nav>

      <div className="dashboard-content">
                {activeTab === 'team' && (
              <div>
                <h2 className="team-heading">My Team</h2>
                <p className="team-subheading">View your teammates and their contact info.</p>

                {loading ? (
                  <p className="loading">Loading...</p>
                ) : (
                  <div className="team-grid">
                    {teamData.map((member, index) => (
                      <div className="team-card" key={index}>
                        <h3 className="team-name">{member.user_name} ({member.role})</h3>
                        <a className="team-email" href={`mailto:${member.user_email}`}>
                          {member.user_email}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
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

              <label>Presentation Link</label>
              <input type="url" placeholder="Paste your Google Slides, Canva, or PowerPoint Online link here" />

              <button type="submit">Submit</button>
            </form>
          </div>
        )}

        {activeTab === 'announcements' && (
          <div>
            <h2>Announcements</h2>
          
          </div>
        )}

        {activeTab === 'schedule' && (
          <div>
            <h2>Live Schedule</h2>
          </div>
        )}

        {activeTab === 'leaderboard' && (
          <div className="leaderboard-section">
            <h2>Leaderboard</h2>

            {loading ? (
              <p>Loading...</p>
            ) : (
          <table className="leaderboard-table">
            <thead>
              <tr>
                <th>Rank</th>
                <th>Team Name</th>
                <th>Problem & Solution</th>
                <th>Impact & Feasibility</th>
                <th>Technical Depth</th>
                <th>Innovation & Creativity</th>
                <th>Q&A Responses</th>
                <th>Presentation Clarity</th>
                <th>User-Centered Design</th>
                <th>Total Score</th>
              </tr>
            </thead>
            <tbody>
              {leaderboard
                .sort((a: any, b: any) => {
                  const totalA = a.problem_solution + a.impact_feasibility + a.technical_depth +
                                a.innovation_creativity + a.qa_responses + a.presentation_clarity +
                                a.user_centered_design;
                  const totalB = b.problem_solution + b.impact_feasibility + b.technical_depth +
                                b.innovation_creativity + b.qa_responses + b.presentation_clarity +
                                b.user_centered_design;
                  return totalB - totalA;
                })
                .map((team: any, index: number) => {
                  return (
                    <tr key={team.team_id || index}>
                      <td>{index + 1}</td>
                      <td>{team.team_name}</td>
                      <td>{team.problem_solution}</td>
                      <td>{team.impact_feasibility}</td>
                      <td>{team.technical_depth}</td>
                      <td>{team.innovation_creativity}</td>
                      <td>{team.qa_responses}</td>
                      <td>{team.presentation_clarity}</td>
                      <td>{team.user_centered_design}</td>
                      <td>{team.total_score}</td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
            )}
          </div>
        )}

        {activeTab === 'feedback' && (
          <div className="feedback-section">
            <h2>Feedback</h2>
            <p className="feedback-subheading">Here’s what others had to say about your work!</p>

            {loading ? (
              <p>Loading feedback...</p>
            ) : feedback.length === 0 ? (
              <p>No feedback available yet.</p>
            ) : (
              <div className="feedback-grid">
                {feedback.map((note, index) => (
                  <div className="feedback-card" key={index}>
                    <p className="feedback-comment">"{note.notes}"</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default HackathonDashboard;
