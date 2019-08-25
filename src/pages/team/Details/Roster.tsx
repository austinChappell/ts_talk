import React from 'react';
import { TeamRoster } from '../../../api/types';
import Table from '../../../components/shared/Table';
import TableHead from '../../../components/shared/TableHead';
import HeaderCell from '../../../components/shared/HeaderCell';
import Cell from '../../../components/shared/Cell';

interface Props {
  teamRoster: TeamRoster | null;
}

const Roster: React.FC<Props> = (props) => {
  if (!props.teamRoster) {
    return <h4>Loading...</h4>
  }

  return (
    <Table>
      <TableHead>
        <tr>
          <HeaderCell>
            Player
          </HeaderCell>
          <HeaderCell>
            Number
          </HeaderCell>
          <HeaderCell>
            Position
          </HeaderCell>
        </tr>
      </TableHead>
      <tbody>
        {props.teamRoster.roster.map(player => (
          <tr key={player.person.id}>
            <Cell>
              {player.person.fullName}
            </Cell>
            <Cell>
              {player.jerseyNumber}
            </Cell>
            <Cell>
              {player.position.name}
            </Cell>
          </tr>
        ))}
      </tbody>
    </Table>
  )
}

export default Roster;
