import React from 'react';
import { TeamStats } from '../../../api/types';
import { titleize } from '../../../utils';
import Table from '../../../components/shared/Table';
import TableHead from '../../../components/shared/TableHead';
import HeaderCell from '../../../components/shared/HeaderCell';
import Cell from '../../../components/shared/Cell';

interface Props {
  teamStats: TeamStats | null;
}

const Stats: React.FC<Props> = (props) => {
  if (!props.teamStats) {
    return <h4>Loading...</h4>
  }

  const [teamStats] = props.teamStats;

  if (!teamStats) {
    return null;
  }

  const [stats, rankings] = teamStats.splits;

  return (
    <Table>
      <TableHead>
        <tr>
          <HeaderCell>
            Description
          </HeaderCell>
          <HeaderCell>
            Stat
          </HeaderCell>
          <HeaderCell>
            Ranking
          </HeaderCell>
        </tr>
      </TableHead>
      <tbody>
        {Object.keys(stats.stat).map(statKey => {
          const label = titleize(statKey);
          const stat = stats.stat[statKey];
          const ranking = rankings.stat[statKey];

          return (
            <tr key={statKey}>
              <Cell>
                {label}
              </Cell>
              <Cell>
                {stat}
              </Cell>
              <Cell>
                {ranking}
              </Cell>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default Stats;
