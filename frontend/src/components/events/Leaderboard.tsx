import React, { useEffect, useState } from "react";
import './Leaderboard.css';
import { Link as RouterLink } from "react-router-dom";


function LeaderboardPage() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true);
      try {
        const res = await fetch("https://cudenver-ai.tech/api/leaderboard");
        const data = await res.json();
        setLeaderboard(data);
      } catch (err) {
        setError("Failed to load leaderboard");
      } finally {
        setLoading(false);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <div className="leaderboard-page-container">
        
            <div className="hackathon-nav">
                        <ul>
                        <li><RouterLink to="/events/hackathon2025">Hackathon Info</RouterLink></li>
                        <li><RouterLink to="/events/hackathon2025/prizes">Prizes</RouterLink></li>
                        <li><RouterLink to="/events/hackathon2025/resources">Resources</RouterLink></li>
                        <li><RouterLink to="/events/hackathon2025/faq">FAQ</RouterLink></li>
                        <li><RouterLink to="/events/hackathon2025/rules">Rules</RouterLink></li>
                        <li><RouterLink to="/events/hackathon2025/leaderboard">Leaderboard</RouterLink></li>
        
                        </ul>
            </div>

      <h1>🏆 Hackathon 2025 Leaderboard</h1>
      {loading && <p>Loading leaderboard...</p>}
      {error && <p className="error">{error}</p>}
      {!loading && !error && (
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
              .sort((a, b) => {
                const score = (t: any) => t.problem_solution + t.impact_feasibility + t.technical_depth + t.innovation_creativity + t.qa_responses + t.presentation_clarity + t.user_centered_design;
                return score(b) - score(a);
              })
              .map((team, index) => {
                const total = team.problem_solution + team.impact_feasibility + team.technical_depth + team.innovation_creativity + team.qa_responses + team.presentation_clarity + team.user_centered_design;
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
                    <td>{total}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default LeaderboardPage;