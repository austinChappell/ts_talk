// External Dependencies
import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';

// Internal Dependencies
import { Team } from '../../api/types/teams';
import { getTeams } from '../../api/teams';
import Page from '../../components/layout/Page';
import TeamCard from './TeamCard';

const List = styled.ul({
  display: 'flex',
  flexWrap: 'wrap',
  margin: '0 auto',
});

const TeamsPage: React.FC = () => {
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
    <Page>
      <h2>Teams</h2>

      <List>
        {teams.map(team => (
          <li key={team.id}>
            <TeamCard team={team} />
          </li>
        ))}
      </List>
    </Page>
  );
}

export default TeamsPage;
