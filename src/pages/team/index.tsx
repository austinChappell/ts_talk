// External Dependencies
import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router';

// Internal Dependencies
import Details from './Details';
import { Team } from '../../api/types/teams';
import { getTeam } from '../../api/teams';
import Page from '../../components/layout/Page';
import TeamLogo from '../../components/shared/TeamLogo';

interface RouteProps {
  id: string;
}

const TeamPage: React.FC<RouteComponentProps<RouteProps>> = (props) => {
  const [team, setTeam] = useState<Team | null>(null);
  const teamId = Number(props.match.params.id);

  async function fetchTeam(id: number) {
    try {
      const response = await getTeam(id);
      setTeam(response.data.teams[0]);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchTeam(teamId);
  }, [teamId])

  if (!team) {
    return null;
  }

  return (
    <Page>
      <h2>{team.name}</h2>

      <TeamLogo
        alt={team.teamName}
        teamId={team.id}
      />

      <Details teamId={teamId} />
    </Page>
  );
}

export default TeamPage;
