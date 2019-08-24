import React, { useState, useEffect } from 'react';
import './App.css';
import { Team } from './api/types/teams';
import { getTeams } from './api/teams';

const App: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  async function fetchTeams() {
    try {
      const response = await getTeams();
      setTeams(response.data.teams);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTeams();
  }, [])

  return (
    <div className="App">
      <h2>Teams</h2>

      <ul>
        {teams.map(team => (
          <li key={team.id}>
            {team.teamName}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
