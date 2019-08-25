// External Dependencies
import React from 'react';

// Local Variables
interface Props {
  alt: string;
  teamId: number;
  width?: number;
}

// Component Definition
const TeamLogo: React.FC<Props> = ({
  alt,
  teamId,
  width = 100,
}) => {
  const src = `https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/${teamId}.svg`;

  return (
    <img
      alt={alt}
      src={src}
      width={width}
    />
  );
};

export default TeamLogo;