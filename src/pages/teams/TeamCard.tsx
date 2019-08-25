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
  backgroundColor: colors.common.white,
  color: colors.grays.dark,
  display: 'block',
  margin: 8,
  textDecoration: 'none',

  '&:visited': {
    color: colors.grays.dark,
  }
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
