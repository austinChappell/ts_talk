// External Dependencies
import React from 'react';

// Internal Dependencies
import Table from '../../../components/shared/Table';
import TableHead from '../../../components/shared/TableHead';
import HeaderCell from '../../../components/shared/HeaderCell';
import Cell from '../../../components/shared/Cell';
import { RegularSeasonRankingStats } from '../../../api/types/people';
import { titleize } from '../../../utils';

interface Props {
  isLoading: boolean;
  stats: RegularSeasonRankingStats | null;
}

const RegularSeasonRankingStatsTable: React.FC<Props> = ({
  isLoading,
  stats,
}) => {
  if (isLoading) {
    return <h4>Loading...</h4>
  }

  if (!stats) {
    return <h4>No Data</h4>
  }

  return (
    <Table>
      <TableHead>
        <tr>
          <HeaderCell>
            Stat
          </HeaderCell>
          <HeaderCell>
            Value
          </HeaderCell>
        </tr>
      </TableHead>
      <tbody>
        {Object.keys(stats).map(statKey => {
          const label = titleize(statKey);
          const stat = stats[statKey];

          return (
            <tr key={statKey}>
              <Cell>
                {label}
              </Cell>
              <Cell>
                {stat}
              </Cell>
            </tr>
          )
        })}
      </tbody>
    </Table>
  )
}

export default RegularSeasonRankingStatsTable;
