import styled from '@emotion/styled';
import React from 'react';
import { Link } from 'react-router-dom';

import { Team } from '../../api/types';
import TeamLogo from '../../components/shared/TeamLogo';
import { colors } from '../../constants';

interface Props {
  team: Team;
}

const CardLink = styled(Link)({
  alignItems: 'center',
  backgroundColor: colors.common.white,
  color: colors.grays.dark,
  display: 'flex',
  flexDirection: 'column',
  height: 120,
  justifyContent: 'center',
  margin: 8,
  padding: 10,
  textDecoration: 'none',
  width: 140,

  '&:visited': {
    color: colors.grays.dark,
  },

  '& h4': {
    marginBottom: 8,
  },
});

const TeamCard: React.FC<Props> = ({ team }) => {
  return (
    <CardLink to={`/teams/${team.id}`}>
      <h4>
        {team.teamName}
      </h4>

      <TeamLogo
        alt={team.teamName}
        teamId={team.id}
      />
    </CardLink>
  )
}

export default TeamCard;
